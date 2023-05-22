export class Blogger {
    public id?: string;
    public name?: string;
    public website?: string;
    public picture_url?: string;
    public email?: string;
    public friends: string[];

    private _friendNames: string[] = [];

    constructor(name: string, website: string, picture_url: string, email: string)   {
        this.name = name;
        this.website = website;
        this.picture_url = picture_url;
        this.email = email;

        this.friends = [];
        this._friendNames = [];
    }

    public get friendNames()    {
        return this._friendNames;
    }

    public set friendNames(names: string[]) {
        this._friendNames = names;
    }
}