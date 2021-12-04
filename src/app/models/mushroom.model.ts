export class Mushroom {
    public get foodValue(): string {
        return this._foodValue;
    }
    public set foodValue(value: string) {
        this._foodValue = value;
    }
    public get remarks(): string {
        return this._remarks;
    }
    public set remarks(value: string) {
        this._remarks = value;
    }
    public get similar(): string {
        return this._similar;
    }
    public set similar(value: string) {
        this._similar = value;
    }
    public get differentiation(): string {
        return this._differentiation;
    }
    public set differentiation(value: string) {
        this._differentiation = value;
    }
    public get taste(): string {
        return this._taste;
    }
    public set taste(value: string) {
        this._taste = value;
    }
    public get smell(): string {
        return this._smell;
    }
    public set smell(value: string) {
        this._smell = value;
    }
    public get pulp(): string {
        return this._pulp;
    }
    public set pulp(value: string) {
        this._pulp = value;
    }
    public get tubes(): string {
        return this._tubes;
    }
    public set tubes(value: string) {
        this._tubes = value;
    }
    public get gills(): string {
        return this._gills;
    }
    public set gills(value: string) {
        this._gills = value;
    }
    public get ring(): string {
        return this._ring;
    }
    public set ring(value: string) {
        this._ring = value;
    }
    public get stem(): string {
        return this._stem;
    }
    public set stem(value: string) {
        this._stem = value;
    }
    public get hat(): string {
        return this._hat;
    }
    public set hat(value: string) {
        this._hat = value;
    }
    public get whereFruiting(): string {
        return this._whereFruiting;
    }
    public set whereFruiting(value: string) {
        this._whereFruiting = value;
    }
    public get whenFruiting(): string {
        return this._whenFruiting;
    }
    public set whenFruiting(value: string) {
        this._whenFruiting = value;
    }
    public get edible(): boolean {
        return this._edible;
    }
    public set edible(value: boolean) {
        this._edible = value;
    }
    public get otherNames(): string {
        return this._otherNames;
    }
    public set otherNames(value: string) {
        this._otherNames = value;
    }
    public get mushroomName(): string {
        return this._mushroomName;
    }
    public set mushroomName(value: string) {
        this._mushroomName = value;
    }
    public get photoURL(): string {
        return this._photoURL;
    }
    public set photoURL(value: string) {
        this._photoURL = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }


    constructor( private _id: number,
        private _photoURL: string,
        private _mushroomName: string,
        private _otherNames: string,
        private _edible: boolean,
        private _whenFruiting: string,
        private _whereFruiting: string,
        private _hat: string,
        private _stem: string,
        private _ring: string,
        private _gills: string,
        private _tubes: string,
        private _pulp: string,
        private _smell: string,
        private _taste: string,
        private _differentiation: string,
        private _similar: string,
        private _remarks: string,
        private _foodValue: string        
        ){}
  }
