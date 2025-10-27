import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Game from '../model/Game.js';

class GameController {
    #game;

    /**
     * 게임 전체를 제어할 메인 메서드
     */
    async play() {

        const carListInput = await InputView.readCarNames();
        const roundsInput = await InputView.readRounds();

        this.#game = new Game(carListInput);

        OutputView.printGameStart();

        this.playGame(roundsInput);

        const winners = this.getWinners();

        OutputView.printWinners(winners);
    }
}

export default GameController;