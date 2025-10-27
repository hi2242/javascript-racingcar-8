# [과제2] 자동차 경주 게임

## 📃 목차
  - [과제 소개](#과제-소개)
  - [테스트 케이스](#테스트-케이스)
  - [Path Tree](#path-tree)
  - [시행착오](#시행착오-및-배운점)
  - [회고](#회고)
  - [커밋 목록 (위에서부터 최신순)](#커밋-목록-위에서부터-최신순)

## 과제 소개

### 기능 요구 사항
> 주어진 횟수 동안 전진 또는 정지를 하며 우승자를 구하는 자동차 경주 게임을 진행한다.

  - 시도할 횟수가 주어진다.
  - 자동차는 전진 혹은 정지를 한다.
  - 각 자동차는 이름을 부여받는다.
  - 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
  - 자동차 이름은 쉼표(`,`)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  - 사용자는 몇 번의 이동을 할 것인지 입력할 수 있다.
  - 무작위 값의 범위는 0 ~ 9이고 4 이상이면 전진한다.
  - 자동차 경주 게임을 완료한 후 우승자를 알려준다. (우승자는 한 명 이상일 수 있다.)
  - 우승자가 여러 명일 경우 쉼표와 스페이스(`, `)를 이용하여 구분한다.
  - 사용자가 잘못된 값을 입력할 경우 '[ERROR]'로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션을 종료시킨다.

### 구현할 기능 목록

  1. README.md 파일 작성
    - 기능 : 과제의 기능 요구 사항과 사용법을 설명하는 README.md 파일을 작성한다.
    - 세부 사항
      - 구현할 모든 기능 목록을 정리한다.
      - 기능 요구 사항을 분석하여 예상 가능한 결과를 정리한다.
      - 실행 방법과 예시를 포함한다.
  2. 사용자 입력 받기
    - 기능 : 자동차의 이름을 조건에 맞게 지정하고 시도할 횟수를 지정한다.
    - 세부 사항
      - 자동차 이름들은 쉼표(`,`)를 구분자로 지정한다.
      - 각 자동차 이름은 5자 이하의 문자로 지정한다.
      - 시도할 횟수는 숫자를 입력받아 지정한다.
  3. 랜덤 값 뽑기
    - 기능 : 0 ~ 9의 숫자를 뽑고 숫자에 맞는 행동을 취한다.
    - 세부 사항
      - 0, 1, 2, 3이 뽑힌 경우엔 자동차가 이동하지 않는다.
      - 4, 5, 6, 7, 8, 9가 뽑힌 경우엔 자동차를 한칸 전진시킨다.
  4. 회차별 결과 출력
    - 기능 : 현재 자동차가 이동한 칸의 개수만큼 `-`로 표현한다.
    - 세부 사항
      - 처음에는 이동한 칸이 없고 로직에 따라 이동하면 `-`를 하나씩 추가한다.
  5. 우승자 출력
    - 기능 : 시도할 횟수가 끝나면 우승자를 쉼표와 스페이스(`, `)로 구분한다.
    - 세부 사항
      - 가장 많이 움직인 자동차들의 이름을 조건에 맞게 출력한다.

### 요구 사항 분석

  - 자동차 이름의 입력이 특이한 경우
    - 입력한 자동차가 없는 경우 => '[ERROR] 경주할 자동차가 존재하지 않습니다.'
    - 자동차의 이름이 5자 초과인 경우 => '[ERROR] 긴 이름의 자동차는 허용되지 않습니다.'
    - 자동차 이름이 공백인 경우 => '[ERROR] 자동차의 이름을 공백으로 설정할 수 없습니다.'
    - 자동차 이름이 중복인 경우 => '[ERROR] 자동차의 이름은 중복으로 설정할 수 없습니다.'
  - 시도할 횟수의 입력이 특이한 경우
    - 사용자가 시도할 횟수로 0을 입력한 경우 => 모두 우승자로 취급
    - 사용자가 음수나 숫자가 아닌 값을 입력한 경우 => '[ERROR] 올바르지 않은 시도 횟수입니다.'

## 테스트 케이스

### 실행 방법
  ```
    npm install
    npm start
    npm test
  ```

### Case 1 (성공 - 우승자 1인)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,woni,jun
    시도할 횟수는 몇 회인가요?
    5

    실행 결과
    pobi : -
    woni : 
    jun : -

    pobi : --
    woni : -
    jun : --

    pobi : ---
    woni : --
    jun : ---

    pobi : ----
    woni : ---
    jun : ----

    pobi : -----
    woni : ----
    jun : -----

    최종 우승자 : pobi, jun
  ```

### Case 2 (성공 - 우승자 2인 이상)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,woni,jun
    시도할 횟수는 몇 회인가요?

    1

    실행 결과
    pobi :
    woni : -
    jun : -

    최종 우승자 : woni, jun
  ```

### Case 3 (성공 - 0회 시도 후 모두 우승인 경우)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,woni,jun
    시도할 횟수는 몇 회인가요?
    0

    실행 결과
    최종 우승자 : pobi, woni, jun
  ```

### Case 4 (예외 - 입력한 자동차가 없는 경우)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)

    [ERROR] 경주할 자동차가 존재하지 않습니다.
    file:///D:/Yoon/APP/woowacourse_8/precourse/javascript-racingcar-8/src/utils/Validator.js:6
                throw new Error(ERROR_MESSAGES.CAR_LIST_EMPTY_ERROR);
                      ^
  ```

### Case 5 (예외 - 자동차의 이름이 5자 초과인 경우)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,javajigi
    [ERROR] 긴 이름의 자동차는 허용되지 않습니다.
    file:///D:/Yoon/APP/woowacourse_8/precourse/javascript-racingcar-8/src/utils/Validator.js:15
                throw new Error(ERROR_MESSAGES.CAR_NAME_LONG_LENGTH_ERROR);
                      ^
  ```

### Case 6 (예외 - 자동차 이름이 공백인 경우)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi, ,java
    [ERROR] 자동차의 이름을 공백으로 설정할 수 없습니다.
    file:///D:/Yoon/APP/woowacourse_8/precourse/javascript-racingcar-8/src/utils/Validator.js:11
                throw new Error(ERROR_MESSAGES.CAR_NAME_CANT_SPACE)
                      ^
  ```

### Case 7 (예외 - 자동차 이름이 중복인 경우)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,java,pobi
    [ERROR] 자동차의 이름은 중복으로 설정할 수 없습니다.
    file:///D:/Yoon/APP/woowacourse_8/precourse/javascript-racingcar-8/src/utils/Validator.js:21
                throw new Error(ERROR_MESSAGES.CAR_NAME_CANT_DUPLICATE);
                      ^
  ```

### Case 8 (예외 - 시도할 횟수가 음수나 숫자가 아닌 값을 입력한 경우)
  ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    pobi,woni,jun
    시도할 횟수는 몇 회인가요?                                                                                                                               
    -5
    [ERROR] 올바르지 않은 시도 횟수입니다.
    file:///D:/Yoon/APP/woowacourse_8/precourse/javascript-racingcar-8/src/utils/Validator.js:37
                throw new Error(ERROR_MESSAGES.ROUNDS_IS_NOT_VALIDATE);
                      ^
  ```



## Path Tree

```
javascript-racingcar-8
├─ node_modules
├─ .npmrc
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.js
│  ├─ constants
│  │  └─ constants.js
│  ├─ controller
│  │  └─ GameController.js
│  ├─ index.js
│  ├─ model
│  │  ├─ Car.js
│  │  └─ Game.js
│  ├─ utils
│  │  ├─ getLogSpy.js
│  │  ├─ mockQuestions.js
│  │  ├─ mockRandoms.js
│  │  └─ Validator.js
│  └─ view
│     ├─ InputView.js
│     └─ OutputView.js
└─ __tests__
  ├─ ApplicationTest.js
  ├─ Car.test.js
  ├─ Game.test.js
  ├─ GameController.test.js
  ├─ Input.test.js
  ├─ Output.test.js
  └─ Validator.test.js
```

## 시행착오 및 배운점

[[과제2]의 시행착오 및 배운점](https://wiggly-dash-83a.notion.site/2-2994a5e03d3380c2a4a0db2fcbcc7854?pvs=74)

## 회고

  > 이번 주차는 1주차보다 예외 테스트를 고려할 부분이 적어서 예외 처리에 시간을 많이 투자하지 않았습니다. 하지만 Model-View-Controller 구조로 분리하여 설계를 할 때 실수가 많이 나왔고 이를 통해 배웠던 점도 많았습니다. 프로그래밍 요구 사항 2에 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인할 때 설계에 이상이 있는 부분이 꽤 많았습니다. 이에 대해 찾아본 결과 TDD라는 방식으로 테스트 실패(Red) -> 테스트 통과(Green) -> 코드 정리(Refactor)라는 3단계 사이클로 했다면 더 쉽게 해결할 수 있었지 않았을까 싶습니다. 다음 주차의 과제를 시작하기 전까지 이 부분에 대해 정리해보고 추가적으로 다른 사람의 코드에서 괜찮은 부분들을 적용해보고 싶다는 생각을 했습니다.

## 커밋 목록 (위에서부터 최신순)
| 커밋 해시 | 타입 | 메시지 |
|------------|--------|--------|
|   최신   | refactor | 임시 커밋 |
| 9b263ad | refactor | 모킹 함수 각 파일마다 구현 |
| 36f7d06 | docs | README 보완 |
| f5bdbc1 | fix | 출력 형식에 맞도록 수정 |
| 423b963 | fix | import 경로 수정 |
| c0eeb23 | feat | GameController 테스트 추가 |
| 84d6600 | feat | Validator 테스트 파일 추가 |
| 711929b | refactor | 모킹 함수 별도 파일 생성 |
| df83d95 | feat | OutputView 테스트 파일 생성 |
| c99b438 | feat | InputView 테스트 파일 생성 |
| 1dbbba6 | feat | Game 클래스 테스트 파일 생성 |
| d221654 | feat | 테스트 시 사용할 모킹 함수 파일 생성 |
| d12d584 | refactor | Game.test.js에서 가짜 함수 모킹을 더 쉽게 하기 위해 수정 |
| 4393183 | feat | Car 클래스 테스트 파일 생성 |
| 97e4473 | refactor | 각 파일의 매직 넘버, 문자열 상수 적용 |
| 01d2263 | refactor | 상수 관리를 위한 constants.js 파일 생성 |
| 4c03de7 | feat | 유효성 검사 추가 |
| 4188c27 | docs | 발생 가능한 예외 사항 README.md에 추가 |
| ebae098 | feat | 유효성 검증 controller에 적용 |
| 5b575b1 | fix | 에러 메시지 출력 메서드 오타 수정 |
| 1f2e8f7 | feat | 에러 메시지 출력 메서드 추가 |
| f2d6b7f | feat | 입력값 유효성 검증 파일 추가 |
| 55ad823 | feat | 유효성 검사를 위한 Validator 파일 생성 |
| 212ad0a | fix | 출력 형식 변경 |
| c422ecf | feat | repeat()을 이용하여 현재 위치를 대쉬(-)를 볼 수 있게 구현 |
| 94ab313 | fix | 우승자의 이름만 전달하도록 getWinners의 반환 값 수정 |
| d11f571 | fix | max 메서드에 올바른 인자를 전달하기 위해 스프레드 연산자를 이용하도록 변경 |
| 82e7683 | fix | private 필드를 getter를 이용하여 가져오도록 수정 |
| 09ca8be | fix | 실행 결과 중복 출력 제거 |
| 00a2d2e | feat | 랜덤 숫자를 뽑는 pickNumber 메서드 구현 |
| ad7ec6d | fix | printCurrentPosition 메서드 호출 시 인자 누락 오류 수정 |
| d1dda59 | fix | 메서드 호출 경로 변경 |
| 483c598 | fix | 메서드 호출 경로 변경 |
| a9bcebd | fix | OutputView instance 메서드에서 static 메서드로 변경 |
| 2cafee2 | fix | 자동차 이름을 쉼표(,) 기준으로 분리 |
| d80e6e2 | fix | instance 메서드에서 static 메서드로 변경 |
| 2ce64cc | fix | import 문 수정 |
| 6b2d3ab | feat | controller 파일 구현 |
| 26c6572 | feat | Game 모델의 인스턴스 생성 |
| b54f15d | fix | Car 클래스를 import하여 인스턴스를 생성하도록 수정 |
| b27443f | feat | 사용자의 자동차 이름과 시도할 횟수 입력부 구현 |
| 5727739 | feat | GameController 기본 구조 생성 |
| 30b6f92 | feat | 사용자에게 출력해줄 OutputView 생성 |
| 183a057 | feat | 사용자로부터 입력을 받을 InputView 생성 |
| 1d05269 | feat | 레이싱 게임에 대한 Game 클래스 생성 |
| ee57393 | refactor | Car 클래스의 메서드에 대한 설명 작성 |
| b7378af | feat | 자동차 이름 및 위치 상태를 갖는 Car 클래스 생성 |
| 56e1cf1 | docs | 프로젝트 기능 명세 및 분석 README 작성 |
| e107b0c | build | update dependencies and node engine version |
| a370bda | feat | setup project |