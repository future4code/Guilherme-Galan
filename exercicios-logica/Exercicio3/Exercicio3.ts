//A

function compareStringCaseSensitive(string1: string, string2: string): boolean {
    return string1.includes(string2)
}

//B

function compareString(string1: string, string2: string): boolean {
    return string1.toUpperCase() === string2.toUpperCase()
}

