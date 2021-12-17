export class MushroomNew {
    public get edibleString1(): string {
        return this.edibleString;
    }
    public set edibleString1(value: string) {
        this.edibleString = value;
    }
    public get consumable1(): string {
        return this.consumable;
    }
    public set consumable1(value: string) {
        this.consumable = value;
    }
    public get foodValue1(): string {
        return this.foodValue;
    }
    public set foodValue1(value: string) {
        this.foodValue = value;
    }
    public get remarks1(): string {
        return this.remarks;
    }
    public set remarks1(value: string) {
        this.remarks = value;
    }
    public get similar1(): string {
        return this.similar;
    }
    public set similar1(value: string) {
        this.similar = value;
    }
    public get differentiation1(): string {
        return this.differentiation;
    }
    public set differentiation1(value: string) {
        this.differentiation = value;
    }
    public get taste1(): string {
        return this.taste;
    }
    public set taste1(value: string) {
        this.taste = value;
    }
    public get smell1(): string {
        return this.smell;
    }
    public set smell1(value: string) {
        this.smell = value;
    }
    public get pulp1(): string {
        return this.pulp;
    }
    public set pulp1(value: string) {
        this.pulp = value;
    }
    public get tubes1(): string {
        return this.tubes;
    }
    public set tubes1(value: string) {
        this.tubes = value;
    }
    public get gills1(): string {
        return this.gills;
    }
    public set gills1(value: string) {
        this.gills = value;
    }
    public get ring1(): string {
        return this.ring;
    }
    public set ring1(value: string) {
        this.ring = value;
    }
    public get stem1(): string {
        return this.stem;
    }
    public set stem1(value: string) {
        this.stem = value;
    }
    public get hat1(): string {
        return this.hat;
    }
    public set hat1(value: string) {
        this.hat = value;
    }
    public get whereFruiting1(): string {
        return this.whereFruiting;
    }
    public set whereFruiting1(value: string) {
        this.whereFruiting = value;
    }
    public get whenFruiting1(): string {
        return this.whenFruiting;
    }
    public set whenFruiting1(value: string) {
        this.whenFruiting = value;
    }
    public get otherNames1(): string {
        return this.otherNames;
    }
    public set otherNames1(value: string) {
        this.otherNames = value;
    }
    public get mushroomName1(): string {
        return this.mushroomName;
    }
    public set mushroomName1(value: string) {
        this.mushroomName = value;
    }
    public get photoURL1(): string {
        return this.photoURL;
    }
    public set photoURL1(value: string) {
        this.photoURL = value;
    }


    constructor(
        private photoURL: string,
        private mushroomName: string,
        private otherNames: string,
        private edibleString: string,
        private consumable: string,
        private whenFruiting: string,
        private whereFruiting: string,
        private hat: string,
        private stem: string,
        private ring: string,
        private gills: string,
        private tubes: string,
        private pulp: string,
        private smell: string,
        private taste: string,
        private differentiation: string,
        private similar: string,
        private remarks: string,
        private foodValue: string
    ) { }
}
