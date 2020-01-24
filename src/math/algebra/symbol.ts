class Symbol {
    constructor(char: string) {}
}

export function isValidCharacter(character) {
    return character.matches(/^[0-Z]$/);
}

export default Symbol;