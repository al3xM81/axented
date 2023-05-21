export class Blogger {
    public id?: string;
    public name?: string;
    public website?: string;
    public picture_url?: string;
    public email?: string;
    public fiends?: any[];

    constructor(name: string, website: string, picture_url: string, email: string)   {
        this.name = name;
        this.website = website;
        this.picture_url = picture_url;
        this.email = email;
    }
}