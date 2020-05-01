import {Teacher} from "./Teacher";
import {Student} from "./Student";

export abstract class Mission{
    private name: string

    constructor(
        protected id: number,
        protected startDate: string,
        protected endDate: string,
        protected teachers?: string[],
        protected students?: Student[],
        protected currentModule: number = undefined
    ) {}

    public getId(): number {
        return this.id;
    }

    public getName(name: string): string {
        return this.name;
    }

    public getStartDate(): string {
        return this.startDate;
    }

    public getEndDate(): string {
        return this.endDate;
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }

    public addTeacher(teacher: string) {
        this.teachers.push(teacher);
    }

    public addStudent(student: Student) {
        this.students.push(student);
    }

    public setName(name: string) {
        this.name = name;
    }
}