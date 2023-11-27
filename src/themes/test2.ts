/// <reference path="../theme.ts" />
namespace StudioAgent {
    export class test2 implements StudioAgent.ITheme {
        public name() {
            return "test";
        }
        public styleOptions() {
            return {
                bubbleBackground: 'rgba(255, 0, 255, .1)',
                bubbleFromUserBackground: 'rgba(45, 255, 0, .1)'
            }
        }
    };
}