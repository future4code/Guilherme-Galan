"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const Teacher_1 = require("./Teacher");
const FullTimeMission_1 = require("./FullTimeMission");
const FileManager_1 = require("./FileManager");
const newStudent = new Student_1.Student("Guilherme", "gui_galan@hotmail.com", 1, "02/01/1992", ["Jogar Video Game", "Tomar uma com os amigos"]);
const newTeacher = new Teacher_1.Teacher(2, "Goli", "goli@labenu.com", ["BACKEND", "TESTES"]);
const newMission = new FullTimeMission_1.FullTimeMission(3, "01/01/2020", "01/07/2020", ["Goli", "Paulinha", "João", "Soter", "Darvas"], [newStudent], 5);
const fsStudent = new FileManager_1.FileManager("students.json");
fsStudent.writeFile(newStudent);
const fsTeacher = new FileManager_1.FileManager("teacher.json");
fsTeacher.writeFile(newTeacher);
const fsMission = new FileManager_1.FileManager("missions.json");
fsMission.writeFile(newMission);
newMission.addStudent(newStudent);
newMission.addTeacher("Paulinha");
console.log(`A idade do aluno é: ${newStudent.getAge(1)} anos`);
//# sourceMappingURL=index.js.map