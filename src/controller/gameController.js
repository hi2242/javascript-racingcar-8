import InputView from '../view/InputView';
import Game from '../model/Game';

class GameController {
    #game;

    /**
     * 게임 전체를 제어할 메인 메서드
     */
    async play() {

        const carListInput = await InputView.readCarNames();
        const roundsInput = await InputView.readRounds();

        this.#game = new Game(carListInput);

        // TODO 4: View를 통해 게임의 시작을 알리는 문구 출력

        // TODO 5: Model의 getWinners()를 통해 최종 우승자 리스트를 저장

        // TODO 6: View를 통해 최종 우승자 정보 출력

    }
}