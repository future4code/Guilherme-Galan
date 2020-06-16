import { readFile } from "fs";

const fileName:string = "accounts.json"

const handleFileRead = (err: Error, data: Buffer) => {
    if(err){
        console.log(err)
        return
    }

    const fileContent: string = data.toString();
    console.log(fileContent)
}

readFile(fileName, handleFileRead)