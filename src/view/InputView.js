import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/constants';

class InputView {
  /**
   * 사용자로부터 자동차 이름 리스트를 입력받는 메서드
   * @return {string} 자동차 이름 리스트
   */
  static async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.CAR_LIST_MESSAGE
    );
    return input;
  }

  /**
   * 사용자로부터 한 게임에서 시도할 라운드 수를 입력받는 메서드
   * @return {number} 시도할 횟수(총 라운드 수)
   */
  static async readRounds() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.ROUNDS_MESSAGE
    );
    return input;
  }
}

export default InputView;