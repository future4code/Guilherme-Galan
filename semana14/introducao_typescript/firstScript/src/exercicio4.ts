function periodosDaHistoria(ano: number, sigla: string): string{
    if(ano < 4000 && sigla === "AC"){
        return "Pré-história"
    }else if(ano > 4000 && sigla === "AC"){
        return "Idade Antiga"
    }else if(ano >= 476 && ano < 1453 && sigla === "DC"){
        return "Idade Média"
    }else if(ano >= 1453 && ano < 1789 && sigla === "DC"){
        return "Idade Moderna"
    }else if(ano > 1789 && sigla === "DC"){
        return "Idade Contemporânea"
    }else{
        return "Algo deu errado"
    }
}

console.log(periodosDaHistoria(4000, "AC"))