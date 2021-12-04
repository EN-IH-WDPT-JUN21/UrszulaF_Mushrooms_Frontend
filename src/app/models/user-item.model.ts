export class UserItem {
    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }
    public get bio(): string {
        return this._bio;
    }
    public set bio(value: string) {
        this._bio = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get avatarURL(): string {
        return this._avatarURL;
    }
    public set avatarURL(value: string) {
        this._avatarURL = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }



    constructor( private _id: number,
        private _avatarURL: string,
        private _username: string,
        private _email: string,
        private _password: string,
        private _bio: string,
        private _role: string,
   
        ){}

        
  }
