import GameController from "../src/controller/GameController.js";
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("GameController 테스트", () => {
  test("공동 우승자가 있는 정상 게임을 진행한다.", async () => {
    const logs = ["pobi : -", "woni : ", "jun : -", "최종 우승자 : pobi, jun"];
    const logSpy = getLogSpy();
    mockQuestions(["pobi,woni,jun", "1"]);
    mockRandoms([5, 0, 7]);

    const controller = new GameController();
    await controller.play();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("여러 라운드를 정상적으로 진행한다.", async () => {
    const logs = [
      "pobi : -",
      "woni : ",
      "pobi : --",
      "woni : -",
      "최종 우승자 : pobi",
    ];
    const logSpy = getLogSpy();
    mockQuestions(["pobi,woni", "2"]);

    mockRandoms([5, 3, 4, 9]);

    const controller = new GameController();
    await controller.play();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("GameController 예외 처리 테스트", () => {
  test("유효하지 않은 자동차 이름 입력 시 에러를 출력하고 종료한다.", async () => {
    const logSpy = getLogSpy();
    const invalidInput = ["pobi,javaji"];
    mockQuestions(invalidInput);

    const controller = new GameController();

    await expect(controller.play()).rejects.toThrow();
  });

  test("유효하지 않은 라운드 횟수 입력 시 에러를 출력하고 종료한다.", async () => {
    const logSpy = getLogSpy();
    const invalidInput = ["pobi,woni", "a"];
    mockQuestions(invalidInput);

    const controller = new GameController();

    await expect(controller.play()).rejects.toThrow();
  });
});
