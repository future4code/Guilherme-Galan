"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TEACHER_SPECIALITY;
(function (TEACHER_SPECIALITY) {
    TEACHER_SPECIALITY["REACT"] = "REACT";
    TEACHER_SPECIALITY["REDUX"] = "REDUX";
    TEACHER_SPECIALITY["CSS"] = "CSS";
    TEACHER_SPECIALITY["TESTES"] = "TESTES";
    TEACHER_SPECIALITY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHER_SPECIALITY["OOP"] = "OOP";
    TEACHER_SPECIALITY["BACKEND"] = "BACKEND";
})(TEACHER_SPECIALITY || (TEACHER_SPECIALITY = {}));
class Teacher {
    constructor(id, name, email, specialities) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialities = specialities;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map