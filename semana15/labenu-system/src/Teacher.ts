import {User} from "./InterfaceUser";

enum TEACHER_SPECIALITY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
}

export class Teacher implements User{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public specialities: string[]
    ) {}
}