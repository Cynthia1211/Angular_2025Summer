export class Projects {

    id: number;
    title: string;
    imgUrl: string;
    description: string;
    important: boolean;

    constructor(
        id: number = 0,
        title: string = 'Project Title',
        imgUrl: string = 'Image URL',
        description: string = 'Project Desc',
        important: boolean = false
    ) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.description = description;
        this.important = important;
    }
}
