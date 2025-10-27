import Game from '../src/model/Game.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};


describe('Game 클래스 테스트', () => {

  test('자동차 이름 문자열을 받아 Car 인스턴스 리스트를 생성한다', () => {
    const carNames = 'pobi,woni,jun';
    
    const game = new Game(carNames);
    
    const winners = game.getWinners();
    expect(winners).toEqual(['pobi', 'woni', 'jun']);
  });

  test('playRound: 각 자동차가 4 이상일 때만 전진시킨다', () => {
    const game = new Game('pobi,woni');

    mockRandoms([4, 3]);
    game.playRound();
    const winners = game.getWinners();

    expect(winners).toEqual(['pobi']);
  });

  test('getWinners: 여러 라운드 후 가장 많이 전진한 차를 반환한다', () => {
    const game = new Game('pobi,woni,jun');
    
    mockRandoms([4, 3, 5]);
    game.playRound();

    mockRandoms([0, 9, 4]);
    game.playRound();

    const winners = game.getWinners();

    expect(winners).toEqual(['jun']);
  });

  test('getWinners: 공동 우승자가 발생하면 모두 반환한다', () => {
    const game = new Game('pobi,woni,jun');
    
    mockRandoms([5, 4, 3]);
    game.playRound();

    const winners = game.getWinners();

    expect(winners).toEqual(['pobi', 'woni']);
  });
});