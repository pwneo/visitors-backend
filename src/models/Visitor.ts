import {uuid} from "uuidv4";

export default class Visitor {
    id: string;
    name: string;
    email: string;
    createdAt: Date;

    public constructor(name: string, email: string, createdAt: Date) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }
}