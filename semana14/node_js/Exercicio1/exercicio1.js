const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);
const operation = process.argv[2];

red   = '\u001b[31m';
blue  = '\u001b[34m';

if(operation === undefined || firstNumber === undefined || secondNumber === undefined){
    console.log(red + "Eu preciso receber 3 parâmetros")
}else{
    switch (operation) {
        case "add":
            return console.log(blue + firstNumber + secondNumber);
        case "sub":
            return console.log(blue + firstNumber - secondNumber);
        case "mult":
            return console.log(blue + firstNumber * secondNumber);
        case "div":
            return console.log(blue + firstNumber / secondNumber)

        default:
            console.log(red + "Algo deu errado!")

    }
}