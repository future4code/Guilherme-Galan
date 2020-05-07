import {Student} from "./Student";
import {Teacher} from "./Teacher";
import {FullTimeMission} from "./FullTimeMission";
import {FileManager} from "./FileManager";

const newStudent = new Student("Guilherme", "gui_galan@hotmail.com", 1, "02/01/1992", ["Jogar Video Game", "Tomar uma com os amigos"])

const newTeacher = new Teacher(2, "Goli","goli@labenu.com", ["BACKEND", "TESTES"])

const newMission = new FullTimeMission(3, "01/01/2020", "01/07/2020", ["Goli", "Paulinha", "João", "Soter", "Darvas"], [newStudent], 5)


const fsStudent = new FileManager("students.json")

fsStudent.writeFile(newStudent)

const fsTeacher = new FileManager("teacher.json")

fsTeacher.writeFile(newTeacher)

const fsMission = new FileManager("missions.json")

fsMission.writeFile(newMission)

newMission.addStudent(newStudent)
newMission.addTeacher("Paulinha")

console.log(`A idade do aluno é: ${newStudent.getAge(1)} anos`)

