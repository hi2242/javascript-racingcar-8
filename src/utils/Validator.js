const Validator = {
    validateCarList(input) {
        if (!input) {
            throw new Error('[ERROR] 경주할 자동차가 존재하지 않습니다.');
        }
        const names = input.split(',');

        if (names.some(name => name.length > 5)) {
            throw new Error('[ERROR] 긴 이름의 자동차는 허용되지 않습니다.');
        }
    },

    validateRounds(input) {
        if (!input) {
            throw new Error('[ERROR] 올바르지 않은 시도 횟수입니다.');
        }
        
        const rounds = Number(input);

        if (isNaN(rounds)) {
            throw new Error('[ERROR] 올바르지 않은 시도 횟수입니다.');
        }

        if (rounds < 0) {
            throw new Error('[ERROR] 올바르지 않은 시도 횟수입니다.');
        }
    }
}

export default Validator;