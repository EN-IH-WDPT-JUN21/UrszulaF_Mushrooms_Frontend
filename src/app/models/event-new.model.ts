export class EventNew {
    public get description1(): string {
        return this.description;
    }
    public set description1(value: string) {
        this.description = value;
    }
    public get contactPerson1(): string {
        return this.contactPerson;
    }
    public set contactPerson1(value: string) {
        this.contactPerson = value;
    }
    public get whereEvent1(): string {
        return this.whereEvent;
    }
    public set whereEvent1(value: string) {
        this.whereEvent = value;
    }
    public get duration1(): number {
        return this.duration;
    }
    public set duration1(value: number) {
        this.duration = value;
    }
    public get whenEvent1(): Date {
        return this.whenEvent;
    }
    public set whenEvent1(value: Date) {
        this.whenEvent = value;
    }
    public get eventTypeName1(): string {
        return this.eventTypeName;
    }
    public set eventTypeName1(value: string) {
        this.eventTypeName = value;
    }
    public get eventName1(): string {
        return this.eventName;
    }
    public set eventName1(value: string) {
        this.eventName = value;
    }




    constructor(
        private eventName: string,
        private eventTypeName: string,
        private whenEvent: Date,
        private duration: number,
        private whereEvent: string,
        private contactPerson: string,
        private description: string
    ) { }


}
