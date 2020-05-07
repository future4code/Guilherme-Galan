import {User} from "./InterfaceUser";
import * as moment from "moment";

export class Student implements  User{
    constructor(
        public name: string,
        public email: string,
        public id: number,
        public birthDate: string,
        public hobbies: string[]
    ) {}

    getAge(id: number): number{
        return moment().diff(this.birthDate, "years")
    }
}