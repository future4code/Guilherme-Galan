const fs = require('fs');
const data = process.argv[3] + "\n";
const fileName = 'tarefas.txt';


red   = '\u001b[31m';
blue  = '\u001b[34m';


if(data === undefined && fileName === undefined){
    console.log(red +"Preciso receber 2 parâmetros")
}else{
    try{
        fs.appendFileSync(fileName, data, 'utf8');
        console.log(blue + "Tarefa Adicionada com Sucesso!")
    }catch(err){
        console.log(red + err)
    }
}