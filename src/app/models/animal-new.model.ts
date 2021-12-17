export class AnimalNew {
    public get description1(): string {
        return this.description;
    }
    public set description1(value: string) {
        this.description = value;
    }
    public get animalSize1(): string {
        return this.animalSize;
    }
    public set animalSize1(value: string) {
        this.animalSize = value;
    }
    public get animalType1(): string {
        return this.animalType;
    }
    public set animalType1(value: string) {
        this.animalType = value;
    }

    public get remarks1(): string {
        return this.remarks;
    }
    public set remarks1(value: string) {
        this.remarks = value;
    }

    public get otherNames1(): string {
        return this.otherNames;
    }
    public set otherNames1(value: string) {
        this.otherNames = value;
    }
    public get animalName1(): string {
        return this.animalName;
    }
    public set animalName1(value: string) {
        this.animalName = value;
    }
    public get photoURL1(): string {
        return this.photoURL;
    }
    public set photoURL1(value: string) {
        this.photoURL = value;
    }



    constructor(
        private photoURL: string,
        private animalName: string,
        private otherNames: string,
        private animalType: string,
        private animalSize: string,
        private description: string,
        private remarks: string
    ) { }
}
