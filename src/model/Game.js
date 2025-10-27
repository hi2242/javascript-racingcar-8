import OutputView from '../view/OutputView.js';
import Car from './Car.js';
import { GAME_PARAMETER } from '../constants/constants.js';

class Game {
    #carList;

    /**
     * 경주에 참여할 자동차를 받아서 레이싱 게임을 생성하는 생성자
     * @param {string[]} carNames 
     */
    constructor(carNames) {
        this.#carList = carNames.split(GAME_PARAMETER.CAR_LIST_DELIMITER).map(name => new Car(name));
    }

    /**
     * 각 자동차 별로 이동 여부를 결정하는 라운드를 진행하는 메서드
     */
    playRound() {
        this.#carList.forEach(car => car.move());
    }

    /**
     * 시도할 횟수가 끝나면 우승자를 반환하는 메서드
     * @return {string[]} 우승 자동차 이름 리스트
     */
    getWinners() {
        const positions = this.#carList.map(car => car.getPosition());
        const bestScore = Math.max(...positions)
        return this.#carList.filter(car => car.getPosition() === bestScore).map(winner => winner.getName());
    }

    /**
     * 전체 게임을 입력 횟수만큼 진행하는 메서드
     * @param {number} rounds
     */
    playGame(rounds) {
        for (let i = 0; i < rounds; i++) {
            this.playRound();
            OutputView.printCurrentPosition(this.#carList);
        }     
    }
}

export default Game;