import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
    /**
     * 사용자로부터 자동차 이름 리스트를 입력받는 메서드
     * @return {string} 자동차 이름 리스트
     */
  async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return input;
  }

  /**
   * 사용자로부터 한 게임에서 시도할 라운드 수를 입력받는 메서드
   * @return {number} 시도할 횟수(총 라운드 수)
   */
  async readRounds() {
    const input = await MissionUtils.Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
    )
    return input;
  }
}
