export class PersonalProfile {
    name: string;
    role: string;
    motto: string;
    aboutMe: string;

    constructor(
        name: string = 'My Name',
        role: string = 'My Role',
        motto: string = 'My Motto',
        aboutMe: string = 'About Me'
    ) {
        this.name = name;
        this.role = role;
        this.motto = motto;
        this.aboutMe = aboutMe;
    }


}