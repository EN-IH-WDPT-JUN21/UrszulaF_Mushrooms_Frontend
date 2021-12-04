export class EventItem {
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get contactPerson(): string {
        return this._contactPerson;
    }
    public set contactPerson(value: string) {
        this._contactPerson = value;
    }
    public get whereEvent(): string {
        return this._whereEvent;
    }
    public set whereEvent(value: string) {
        this._whereEvent = value;
    }
    public get duration(): number {
        return this._duration;
    }
    public set duration(value: number) {
        this._duration = value;
    }
    public get whenEvent(): Date {
        return this._whenEvent;
    }
    public set whenEvent(value: Date) {
        this._whenEvent = value;
    }
    public get eventType(): string {
        return this._eventType;
    }
    public set eventType(value: string) {
        this._eventType = value;
    }
    public get eventName(): string {
        return this._eventName;
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }



    constructor( private _id: number,
        private _eventName: string,
        private _eventType: string,
        private _whenEvent: Date,
        private _duration: number,
        private _whereEvent: string,
        private _contactPerson: string,
        private _description: string     
        ){}

        
  }
