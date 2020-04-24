import { readdir, readFile } from "fs";

const handleFileRead = ( err:Error, file:Buffer) => {
    if(err){
        console.error(err);
        return;
    }

    const fileContent:string = file.toString();
}

const arrayFiles = readdir("../textos", (err:Error, files:string[]) => {
    if(err) {
        console.log(err)
        return;
    }else{
        files.map(file => {
            readFile(file, handleFileRead)
        })
    }
})

const myPromise = new Promise((resolve, reject) => {
    const result = arrayFiles.map(text:string => {
        return text;
    })
    resolve(result)
})

myPromise.then((result:string[]) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
})