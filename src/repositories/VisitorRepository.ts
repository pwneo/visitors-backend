import Visitor from "../models/Visitor";

export default class VisitorRepository {
    private readonly database: Visitor[];

    constructor() {
        this.database = [];
    }

    public save(name: string, email: string, createdAt: Date): Visitor {
        const visitor = new Visitor(name, email, createdAt);
        this.database.push(visitor);
        return visitor;
    };

    public findAll(): Visitor[] {
        return this.database;
    }

    public findById(id: string): Visitor | null {
        const index = this.getIndex(id);
        return index < 0 ? null : this.database[index];
    }

    public update(id: string, name: string, email: string, createdAt: Date): Visitor | null {
        const index = this.getIndex(id);
        if (index < 0) {
            return null;
        }
        const visitor = this.database[index];
        visitor.name = name;
        visitor.email = email;
        visitor.createdAt = createdAt;
        this.database[index] = visitor;
        return visitor;
    }

    public delete(id: string): Visitor | null {
        const index = this.getIndex(id);
        if (index < 0) {
            return null;
        }
        const visitor = this.database[index];
        this.database.splice(index, 1);
        return visitor;
    }

    private getIndex(id: string): number {
        return this.database.findIndex(visitor => visitor.id === id);
    }
}