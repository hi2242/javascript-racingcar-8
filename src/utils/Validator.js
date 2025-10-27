import { ERROR_MESSAGES } from '../constants/constants.js';

const Validator = {
    validateCarList(input) {
        if (!input) {
            throw new Error(ERROR_MESSAGES.CAR_LIST_EMPTY_ERROR);
        }
        const names = input.split(',');

        if (names.some(name => name.trim().length == 0)) {
            throw new Error(ERROR_MESSAGES.CAR_NAME_CANT_SPACE)
        }

        if (names.some(name => name.length > 5)) {
            throw new Error(ERROR_MESSAGES.CAR_NAME_LONG_LENGTH_ERROR);
        }

        const nameSet = new Set(names);

        if (nameSet.size !== names.length) {
            throw new Error(ERROR_MESSAGES.CAR_NAME_CANT_DUPLICATE);
        }
    },

    validateRounds(input) {
        if (!input) {
            throw new Error(ERROR_MESSAGES.ROUNDS_IS_NOT_VALIDATE);
        }
        
        const rounds = Number(input);

        if (isNaN(rounds)) {
            throw new Error(ERROR_MESSAGES.ROUNDS_IS_NOT_VALIDATE);
        }

        if (rounds < 0) {
            throw new Error(ERROR_MESSAGES.ROUNDS_IS_NOT_VALIDATE);
        }
    }
}

export default Validator;