import { isValidCharacter } from './symbol';

class Expression {
    constructor(expression: string) {
        if(!parseExpression(expression)) {
            
        }
    }
}

function parseExpression(string) {
    for (var i = 0; i < string.length; i++) {
        if (!isValidCharacter(string[i])) {
            return false;
        }
    }
}

export default Expression;