function validateCep(cep: string): boolean {
    return cep.length > 8 && cep.indexOf('-') > 0
}