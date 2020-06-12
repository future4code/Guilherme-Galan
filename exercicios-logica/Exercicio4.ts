function checkString(string: string): boolean {
    return !isNaN(parseFloat(string)) && isFinite(string as any)
}