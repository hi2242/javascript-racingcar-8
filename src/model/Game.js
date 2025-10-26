import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
    #carList;

    /**
     * 경주에 참여할 자동차를 받아서 레이싱 게임을 생성하는 생성자
     * @param {string[]} carNames 
     */
    constructor(carNames) {
        this.#carList = carNames.map(name => new Car(name));
    }

    /**
     * 각 자동차 별로 이동 여부를 결정하는 라운드를 진행하는 메서드
     */
    playRound() {
        this.#carList.forEach(car => car.move());
    }

    /**
     * 현재 모든 자동차의 위치를 시각적으로 출력하는 메서드
     */
    printCurrentPosition() {
        this.#carList.map(car => MissionUtils.Console.print(`${car.getName()} : ${car.getPosition()}`))
    }

    /**
     * 시도할 횟수가 끝나면 우승자를 반환하는 메서드
     * @return {string[]} 우승 자동차 이름 리스트
     */
    getWinners() {
        const bestScore = Math.max(this.#carList);
        return this.#carList.map(car => car.length === bestScore);
    }

    /**
     * 전체 게임을 입력 횟수만큼 진행하는 메서드
     * @param {number} rounds
     */
    playGame(rounds) {
        MissionUtils.Console.print('실행 결과');
        for (let i = 0; i < rounds; i++) {
            this.playRound();
            this.printCurrentPosition();
        }
        const winners = this.getWinners();
        MissionUtils.Console.print(`최종 우승자 : ${winners}`)
    }
    
}
