namespace StudioAgent  {
    export interface ITheme {
        name(): string;
        styleOptions(): object;
    }

    export class Themes {
        static get test(){
            return new StudioAgent.test();
        }

        static get test2() {
            return new StudioAgent.test2();
        }
    }
}