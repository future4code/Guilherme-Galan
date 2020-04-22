enum IDADES_HISTORICAS {
    PRE_HISTORIA = "Pré-história",
    IDADE_ANTIGA = "Idade Antiga",
    IDADE_MEDIA = "Idade Média",
    IDADE_MODERNA = "Idade Moderna",
    IDADE_CONTEMPORANEA = "idade Contemporânea",
    PERIODO_INVALIDO = "Este Perído não existe!"
}

enum ANTES_DEPOIS_CRISTO {
    AC = "Antes de Cristo",
    DC = "Depois de Cristo"
}

function encontaIdadeHistoria(ano: number, ACDC?: ANTES_DEPOIS_CRISTO): IDADES_HISTORICAS{
    ACDC = ACDC || ANTES_DEPOIS_CRISTO.DC
    if(ACDC === ANTES_DEPOIS_CRISTO.AC){
        if(ano>4000){
            return IDADES_HISTORICAS.PRE_HISTORIA
        }else{
            return IDADES_HISTORICAS.IDADE_ANTIGA
        }
    }else{
        if(ano<476){
            return IDADES_HISTORICAS.IDADE_MEDIA
        }else if(ano<1453){
            return IDADES_HISTORICAS.IDADE_MODERNA
        }else{
            return IDADES_HISTORICAS.IDADE_CONTEMPORANEA
        }
    }
    return IDADES_HISTORICAS.PERIODO_INVALIDO
}

console.log(encontaIdadeHistoria(4500, ANTES_DEPOIS_CRISTO.AC))