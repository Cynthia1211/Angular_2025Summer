export class ContactInfo {

    desc: string;
    detail: string;

    constructor(
        desc: string = "Contact Name",
        detail: string = "Contact Detail"
    ) {
        this.desc = desc;
        this.detail = detail;
    }
    
}
