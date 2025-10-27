import Car from '../src/model/Car.js';
import { mockRandoms } from '../src/utils/mockRandoms.js';
import OutputView from '../src/view/OutputView.js';
import { getLogSpy } from '../src/utils/getLogSpy.js';

describe('OutputputView 클래스 테스트', () => {
  test('printGameStart: 시작 문구를 출력한다.', async () => {
    const logSpy = getLogSpy();

    OutputView.printGameStart();

    expect(logSpy).toHaveBeenCalledWith('\n실행 결과');
  });

  test('printCurrentPosition: 각 차량의 위치 출력한다.', async () => {
    const logs = [
        'pobi : --',
        'woni : ',
        'jun : -',
    ];
    const logSpy = getLogSpy();
    const carList = [
        new Car('pobi'),
        new Car('woni'),
        new Car('jun'),
    ];

    mockRandoms([5, 0, 4]);
    carList.map(car => car.move());
    mockRandoms([5, 1, 3]);
    carList.map(car => car.move());
    
    OutputView.printCurrentPosition(carList);

    logs.forEach(log => 
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
    );
  });

  test('printWinners: 우승자를 출력한다.', async () => {
    const logSpy = getLogSpy();
    const winners = ['pobi'];

    OutputView.printWinners(winners);

    expect(logSpy).toHaveBeenCalledWith(`최종 우승자 : ${winners.join(', ')}`);
  });

    test('printError: 에러 메시지를 출력한다.', async () => {
    const logSpy = getLogSpy();

    OutputView.printError('[ERROR]');

    expect(logSpy).toHaveBeenCalledWith('[ERROR]');
  });
});