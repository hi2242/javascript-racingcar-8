import Car from '../src/model/Car.js';

describe('Car 클래스 테스트', () => {
  test('자동차는 이름을 인자로 받아서 Car 인스턴스를 생성한다.', () => {
    const car = new Car('pobi');
    const name = car.getName();
    expect(name).toBe('pobi');
  });

  test('자동차는 0의 위치에서 시작한다.', () => {
    const car = new Car('pobi');
    const position = car.getPosition();

    expect(position).toBe(0);
  });
});

describe('move 메서드 테스트', () => {
  test('move 메서드의 인자 값이 4 미만이면 정지한다.', () => {
    const car = new Car('pobi');
    car.move(3);
    const position = car.getPosition();

    expect(position).toBe(0);
  });

  test('move 메서드의 인자 값이 4 이상이면 움직인다.', () => {
    const car = new Car('pobi');
    car.move(4);
    const position = car.getPosition();

    expect(position).toBe(1);
  });
});
