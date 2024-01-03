/// <reference path="./theme.ts" />
/// <reference path="./themes/test.ts" />
/// <reference path="./studioAgentBridgeOptions.ts" />
namespace StudioAgent {
    export class Bridge {
        private options: StudioAgent.BridgeOptions;
        private dispatcher: any;

        // Callback to invoke when a new event message is received
        public eventReceived?: (name: string, args: any) => void;

        // Callback to invoke when a new message is received
        public messageReceived?: (args: any) => void;

        // Callback to invoke when the ConversationUpdate message is received
        public conversationUpdate?: (args: any) => void;

        public typing?: (args: any) => void;
        public endOfConversation?: (args: any) => void;

        // Callback invoked when 
        public addBindings?: (args: any) => boolean;

        //private logger = new Logger({ name: "studioAgentBridge" });

        private webChat: WebChat;
        private createDirectLine: any;
        private createStyleSet: any;
        private renderWebChat: any;
        private createStore: any;

        public initializeEvent?: (value: any) => void;

        constructor(options: BridgeOptions) {
            //this.logger.debug("Constructing new instance of StudioAgentBridge");

            this.options = options;
        }

        public async connect() {
            await this.loadScript('https://cdn.botframework.com/botframework-webchat/latest/webchat.js');

            this.webChat = window['WebChat'];
            this.createDirectLine = this.webChat.createDirectLine;
            this.createStyleSet = this.webChat.createStyleSet;
            this.renderWebChat = this.webChat.renderWebChat;
            this.createStore = this.webChat.createStore;

            const webchatElement = document.getElementById(this.options.elementId);

            if (!webchatElement) {
                console.error(`Could not find element ${this.options.elementId}`);
                return;
            }

            var environmentEndPoint = this.options.url.slice(0,this.options.url.indexOf('/powervirtualagents'));
            var apiVersion = this.options.url.slice(this.options.url.indexOf('api-version')).split('=')[1];
            var regionalChannelSettingsURL = `${environmentEndPoint}/powervirtualagents/regionalchannelsettings?api-version=${apiVersion}`;
        
            const styleSet = this.createStyleSet(this.options.theme.styleOptions());

            var store = this.createLocalStore();

            var directline: any;
            fetch(regionalChannelSettingsURL)
            .then((response) => {
                return response.json();
                })
            .then((data) => {
                directline = data.channelUrlsById.directline;
                })
            .catch(err => console.error("An error occurred: " + err));

            fetch(this.options.url)
            .then(response => response.json())
            .then(conversationInfo => {
                const directLine = this.webChat.createDirectLine({
                    domain: `${ directline }v3/directline`,
                    secret: conversationInfo.token
                    });

                    this.renderWebChat(
                    {
                        directLine: directLine,
                        styleSet,
                        store: store,
                        styleOptions: {
                            hideUploadButton: true
                        }
                    },
                    webchatElement
                    );

                    if (this.options.autoFocus) {
                        // TODO: Set focus to input control after chat is rendered
                    }
            })
        }

        public send(text: string, silent: boolean = false) {
            var dispatchJSON = {
                meta: {
                    method: "keyboard",
                },
                payload: {
                    activity: {
                        channelData: {
                                postBack: silent,
                        },
                            text: text,
                            type: "message",
                    },
                },
                type: "DIRECT_LINE/POST_ACTIVITY",
            }

            this.dispatcher(dispatchJSON);
        }

        private loadScript(url: string): Promise<boolean>
        {
            var promise = new Promise<boolean>((resolve, reject) => {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.setAttribute("crossorigin", "anonymous");
                script.src = url;

                script.onload = () => {
                    resolve(true);
                };

                head.appendChild(script);
            });

            return promise;
        }

        private createLocalStore(): any {
            const store = this.createStore(
                {},
                ({ dispatch }) => next => action => {
                    this.dispatcher = dispatch;
                console.log('Action: ');
                console.log(action);
                    if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
                    var dispatchJSON = {
                            meta: {
                                method: "keyboard",
                            },
                            payload: {
                                activity: {
                                        channelData: {
                                            postBack: true,
                                        },
                                        name: 'startConversation',
                                        type: "event",
                                    },
                            },
                            type: "DIRECT_LINE/POST_ACTIVITY",
                        }
                    dispatch(dispatchJSON);
                }
                else if (action.type === "DIRECT_LINE/INCOMING_ACTIVITY" && action.payload?.activity?.type === "event") {
                    const activity = action.payload?.activity;

                    if (activity) {
                        switch (activity.name) {
                            case 'Initialize':
                                const args = activity.value as InitializeArgs;
                                this.initialize(args);
                                break;
                        }

                        if (this.eventReceived) {
                            this.eventReceived(activity.name, activity.value);
                        }
                    }
                }
                return next(action);
            }
            );

            return store;
        }

        private initialize(value: any) {
            if (value.bindings) {
                let process = true;

                if (this.addBindings) {
                    process = this.addBindings(value.bindings)
                }

                if (process) {
                    this.addBindingsInternal(value.bindings);
                }
            }
        }

        private addBindingsInternal(bindings: any) {
            bindings.forEach((element) => {
                var docELement = document.getElementById(element.elementId);
                if (!docELement) {
                    console.error(`Could not found element with id: ${element.elementId}`);
                    return;
                }

                docELement.onchange = () => {
                    console.log("Element changed");
                    this.send(element.value)
                };
            });
        }
    }
}