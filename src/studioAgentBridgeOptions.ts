/// <reference path="./theme.ts" />
/// <reference path="./themes/test.ts" />
namespace StudioAgent {
    export class BridgeOptions {
        public url: string;
        public elementId: string = 'webchat';
        public autoFocus: boolean =  true;
        public theme: StudioAgent.ITheme = new StudioAgent.test();
        constructor(url: string) {
            this.url = url;
        }
    }
}