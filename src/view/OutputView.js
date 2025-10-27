import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  /**
   * 게임 시작 시 실행 결과라는 문구를 출력해줄 메서드
   */
  static printGameStart() {
    MissionUtils.Console.print("\n실행 결과");
  }

  /**
   * 자동차의 위치를 시각적으로 출력하는 메서드
   * @param {Car[]} carList - 자동차 리스트
   */
  static printCurrentPosition(carList) {
    carList.map((car) =>
      MissionUtils.Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`)
    );
  }

  /**
   * 우승자를 출력하는 메서드
   * @param {string[]} winnerList - 우승 자동차 이름 리스트
   */
  static printWinners(winnerList) {
    MissionUtils.Console.print(winnerList.join(", "));
  }
}

export default OutputView;
