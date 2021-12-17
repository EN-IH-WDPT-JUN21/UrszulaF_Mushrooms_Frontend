export class Animal {
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get animalSize(): string {
        return this._animalSize;
    }
    public set animalSize(value: string) {
        this._animalSize = value;
    }
    public get animalType(): string {
        return this._animalType;
    }
    public set animalType(value: string) {
        this._animalType = value;
    }

    public get remarks(): string {
        return this._remarks;
    }
    public set remarks(value: string) {
        this._remarks = value;
    }

    public get otherNames(): string {
        return this._otherNames;
    }
    public set otherNames(value: string) {
        this._otherNames = value;
    }
    public get animalName(): string {
        return this._animalName;
    }
    public set animalName(value: string) {
        this._animalName = value;
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


    constructor(private _id: number,
        private _photoURL: string,
        private _animalName: string,
        private _otherNames: string,
        private _animalType: string,
        private _animalSize: string,
        private _description: string,
        private _remarks: string
    ) { }
}
