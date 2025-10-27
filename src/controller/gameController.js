import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Game from '../model/Game.js';
import Validator from '../utils/Validator.js';

class GameController {
  #game;

  /**
   * 게임 전체를 제어할 메인 메서드
   */
async play() {
    const carListInput = await InputView.readCarNames();
    Validator.validateCarList(carListInput);

    const roundsInput = await InputView.readRounds();
    Validator.validateRounds(roundsInput);

    this.#game = new Game(carListInput);

    OutputView.printGameStart();

    this.#game.playGame(roundsInput);

    const winners = this.#game.getWinners();

    OutputView.printWinners(winners);
  }
}

export default GameController;
