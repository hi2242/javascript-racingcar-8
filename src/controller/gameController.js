import InputView from '../view/InputView';

class GameController {
    #game;

    /**
     * 게임 전체를 제어할 메인 메서드
     */
    async play() {

        const carListInput = await InputView.readCarNames();
        const roundsInput = await InputView.readRounds();

        // TODO 3: 입력받은 데이터를 통해 Model의 Game 인스턴스 생성
        

        // TODO 4: View를 통해 게임의 시작을 알리는 문구 출력

        // TODO 5: Model의 getWinners()를 통해 최종 우승자 리스트를 저장

        // TODO 6: View를 통해 최종 우승자 정보 출력

    }
}