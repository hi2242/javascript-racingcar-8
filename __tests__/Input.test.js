import InputView from '../src/view/InputView.js';
import { mockQuestions } from '../src/utils/mockQuestions.js';

describe('InputView 클래스 테스트', () => {
  test('readCarNames: 자동차 이름을 입력받는다.', async () => {
    mockQuestions(['pobi,woni,jun']);

    const result = await InputView.readCarNames();

    expect(result).toBe('pobi,woni,jun');
  });

  test('readRounds: 시도할 횟수를 입력받는다.', async () => {
    mockQuestions(['5']);

    const result = await InputView.readRounds();

    expect(result).toBe('5');
  });
});