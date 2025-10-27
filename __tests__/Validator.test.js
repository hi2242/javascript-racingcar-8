import Validator from '../src/utils/Validator.js';
import { ERROR_MESSAGES } from '../src/constants/constants.js';

describe('Validator 테스트', () => {

  describe('validateCarList', () => {
    test('입력이 비어있으면 CAR_LIST_EMPTY_ERROR 에러를 던진다.', () => {
      const input = '';
      expect(() => Validator.validateCarList(input))
        .toThrow(ERROR_MESSAGES.CAR_LIST_EMPTY_ERROR);
    });

    test('이름에 공백만 있으면 CAR_NAME_CANT_SPACE 에러를 던진다.', () => {
      const input = 'pobi, ,woni';
      expect(() => Validator.validateCarList(input))
        .toThrow(ERROR_MESSAGES.CAR_NAME_CANT_SPACE);
    });

    test('이름이 5자를 초과하면 CAR_NAME_LONG_LENGTH_ERROR 에러를 던진다.', () => {
      const input = 'pobi,javaji';
      expect(() => Validator.validateCarList(input))
        .toThrow(ERROR_MESSAGES.CAR_NAME_LONG_LENGTH_ERROR);
    });

    test('이름이 중복되면 CAR_NAME_CANT_DUPLICATE 에러를 던진다.', () => {
      const input = 'pobi,woni,pobi';
      expect(() => Validator.validateCarList(input))
        .toThrow(ERROR_MESSAGES.CAR_NAME_CANT_DUPLICATE);
    });
  });

  describe('validateRounds', () => {
    test('입력이 비어있으면 ROUNDS_IS_NOT_VALIDATE 에러를 던진다.', () => {
      const input = '';
      expect(() => Validator.validateRounds(input))
        .toThrow(ERROR_MESSAGES.ROUNDS_IS_NOT_VALIDATE);
    });

    test('입력이 숫자가 아니면("abc") ROUNDS_IS_NOT_VALIDATE 에러를 던진다.', () => {
      const input = 'abc';
      expect(() => Validator.validateRounds(input))
        .toThrow(ERROR_MESSAGES.ROUNDS_IS_NOT_VALIDATE);
    });

    test('입력이 음수이면("-1") ROUNDS_IS_NOT_VALIDATE 에러를 던진다.', () => {
      const input = '-1';
      expect(() => Validator.validateRounds(input))
        .toThrow(ERROR_MESSAGES.ROUNDS_IS_NOT_VALIDATE);
    });
  });
});