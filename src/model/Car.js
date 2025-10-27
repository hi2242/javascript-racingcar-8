import { GAME_PARAMETER } from '../constants/constants';
class Car {
    #name;
    #position;

    /**
     * Car의 객체를 생성하는 생성자
     * @param {string} name
     */
    constructor(name) {
        this.#name = name;
        this.#position = GAME_PARAMETER.START_POSITION;
    }

    /**
     * 랜덤으로 뽑힌 값을 받아서 4 이상이면 전진시키는 메서드
     * @param {number} value
     */
    move(value) {
        if (value >= GAME_PARAMETER.MOVE_LIMITATION) {
            this.#position++;
        }
    }

    /**
     * private인 name 정보를 반환하는 메서드
     * @return {string} name
     */
    getName() {
        return this.#name;
    }

    /**
     * private인 position 정보를 반환하는 메서드
     * @return {number} position
     */
    getPosition() {
        return this.#position;
    }
}

export default Car;