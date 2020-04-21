var IDADES_HISTORICAS;
(function (IDADES_HISTORICAS) {
    IDADES_HISTORICAS["PRE_HISTORIA"] = "Pr\u00E9-hist\u00F3ria";
    IDADES_HISTORICAS["IDADE_ANTIGA"] = "Idade Antiga";
    IDADES_HISTORICAS["IDADE_MEDIA"] = "Idade M\u00E9dia";
    IDADES_HISTORICAS["IDADE_MODERNA"] = "Idade Moderna";
    IDADES_HISTORICAS["IDADE_CONTEMPORANEA"] = "idade Contempor\u00E2nea";
    IDADES_HISTORICAS["PERIODO_INVALIDO"] = "Este Per\u00EDdo n\u00E3o existe!";
})(IDADES_HISTORICAS || (IDADES_HISTORICAS = {}));
var ANTES_DEPOIS_CRISTO;
(function (ANTES_DEPOIS_CRISTO) {
    ANTES_DEPOIS_CRISTO["AC"] = "Antes de Cristo";
    ANTES_DEPOIS_CRISTO["DC"] = "Depois de Cristo";
})(ANTES_DEPOIS_CRISTO || (ANTES_DEPOIS_CRISTO = {}));
function encontaIdadeHistoria(ano, ACDC) {
    ACDC = ACDC || ANTES_DEPOIS_CRISTO.DC;
    if (ACDC === ANTES_DEPOIS_CRISTO.AC) {
        if (ano > 4000) {
            return IDADES_HISTORICAS.PRE_HISTORIA;
        }
        else {
            return IDADES_HISTORICAS.IDADE_ANTIGA;
        }
    }
    else {
        if (ano < 476) {
            return IDADES_HISTORICAS.IDADE_MEDIA;
        }
        else if (ano < 1453) {
            return IDADES_HISTORICAS.IDADE_MODERNA;
        }
        else {
            return IDADES_HISTORICAS.IDADE_CONTEMPORANEA;
        }
    }
    return IDADES_HISTORICAS.PERIODO_INVALIDO;
}
console.log(encontaIdadeHistoria(4500, ANTES_DEPOIS_CRISTO.AC));
//# sourceMappingURL=exercicio4.js.map