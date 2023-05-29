// 재사용할 수 있게 타입 만들기
type Age = number;
type Player = {
  readonly name: string;
  age?: Age;
  cute: Temp;
};
type Temp = {
  isHamster: boolean;
  cutiepie: boolean;
};

const player: Player = {
  name: "hamster",
  age: 30,
  cute: { isHamster: false, cutiepie: true },
};

// age가 있을지 없을지 모르기 때문에, 있을 경우에만 실행한다고 명시시켜줌
if (player.age && player.age < 10) {
}

// type Player를 리턴한다고 명시
// string타입의 매개변수를 받는다고 명시
function Hamster(name: string, cute: Temp): Player {
  return {
    name: name,
    cute: { isHamster: cute.isHamster, cutiepie: cute.cutiepie },
  };
}
// 화살표함수
const chiikawa = (name: string, cute: Temp): Player => {
  return {
    name: name,
    cute: { isHamster: cute.isHamster, cutiepie: cute.cutiepie },
  };
};

const hams = Hamster("hams", { isHamster: true, cutiepie: true });
hams.age = 30;
hams.cute = { isHamster: false, cutiepie: true };

const arr: readonly number[] = [1, 2, 3, 4, 5];
