export const GAME_PARAMETER = {
  START_POSITION: 0,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
  MOVE_LIMITATION: 4,
  CAR_NAME_LIMIATION: 5,
  CAR_LIST_DELIMITER: ',',
  WINNER_LIST_DELIMITER: ', ',
};

export const ERROR_MESSAGES = {
  CAR_LIST_EMPTY_ERROR: "[ERROR] 경주할 자동차가 존재하지 않습니다.",
  CAR_NAME_LONG_LENGTH_ERROR: "[ERROR] 긴 이름의 자동차는 허용되지 않습니다.",
  CAR_NAME_CANT_SPACE: "[ERROR] 자동차의 이름을 공백으로 설정할 수 없습니다.",
  CAR_NAME_CANT_DUPLICATE:
    "[ERROR] 자동차의 이름은 중복으로 설정할 수 없습니다.",
  ROUNDS_IS_NOT_VALIDATE: "[ERROR] 올바르지 않은 시도 횟수입니다.",
};

export const INPUT_MESSAGE = {
  CAR_LIST_MESSAGE:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ROUNDS_MESSAGE: "시도할 횟수는 몇 회인가요?\n",
};

export const OUTPUT_MESSAGE = {
  START_MESSAGE: "\n실행 결과",
  POSITION_BAR: "-",
  FINISH_MESSAGE: "최종 우승자 : ",
};
