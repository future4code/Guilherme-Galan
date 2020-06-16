import { Characters } from "./models/Characters";

export function validateCharacter(input: Characters): boolean {
    if(!input.name || input.health === undefined || input.defense === undefined || input.strength === undefined){
        return false
    }else if(input.health < 0 || input.defense < 0 || input.strength < 0){
        return false
    }

    return true;
}

export function performAttack(attacker: Characters, defender: Characters): void {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error('Invalid Character')
    }

    if(attacker.strength > defender.defense) {
        defender.health -= attacker.strength - defender.defense
    }
}

export function performAttackWithDependencyInversion(
    attacker: Characters, 
    defender: Characters, 
    validator:(input: Characters) => boolean){
        if(!validator(attacker) || !validator(defender)){
            throw new Error('Invalid Character')
        }
    
        if(attacker.strength > defender.defense) {
            defender.health -= attacker.strength - defender.defense
        }
    }