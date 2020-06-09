exports.handler = async (event) => {
    if(event.text.indexOf('@') > 0){
        return{
            "isEmail": true
        }

    }
        return {
            "isEmail": false,
            "reason": "Não possui @"
        }
}