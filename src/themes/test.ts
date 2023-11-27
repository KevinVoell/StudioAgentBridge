/// <reference path="../theme.ts" />
namespace StudioAgent  {
    export class test implements StudioAgent.ITheme {
        public name() {
            return "test";
        }
        public styleOptions() {
            return {
                bubbleBackground: 'rgba(0, 0, 255, .1)',
                bubbleFromUserBackground: 'rgba(0, 255, 0, .1)'
            }
        }
    };
}

