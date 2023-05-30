// call signature
type Add = (a: number, b: number) => number;
type TAdd = { (a: number, b: number): number }; // 이렇게도 쓸 수 있다
type Test = (hamster: string, cute: number) => object;

const add: Add = (a, b) => a + b;

let asd = "hamster";
const hamster: Test = (a, b) => {
  return {
    a,
    b,
  };
};

// overloading
// Next js 예시

// Router.push("/home")
// Router.push({
//     path : "/home",
//     state : 1
// })
// 해당 push는 string만 받기도 하고, object를 받기도 한다

// 타입 선언
type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void; // string만 받는 경우
  (config: Config): void; // config로 경로와 state둘 다 받는 경우
};

// 이렇게 작성해도 됨
type IPush = {
  (path: string): void;
  (config: { path: string; state: object });
};

// 사용할 때
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// call signature의 파라미터 갯수가 다른 경우
type Hamster = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number; // 이때 C는 optional
};

// 사용할 땐 이렇게 써 줘야 함
const fight: Hamster = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
// 이렇게 하는것과 별반 차이가 없다네요
const realFight = (a: number, b: number, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// polymorphism
// generic 타입
type IsHamster = {
  <HamsterIsGood>(arr: HamsterIsGood[]): HamsterIsGood;
};

const cool: IsHamster = (arr) => {
  return arr[0];
};

const a = cool(["1", "2", "3"]);
const b = cool([1, 2, 3, 4, 5, 5]);
cool([true, false, true, false]);
cool([1, 2, 3, true, "hi"]);

// generic을 사용하는 다른 방법
function cat<T>(a: T[]) {
  return a[0];
}

const c = cat(["1", "2", "3"]);
const d = cat([1, 2, 3, 4, 5, 5]);
cat([true, false, true, false]);
cat([1, 2, 3, true, "hi"]);

// generic으로 타입을 저장할 수도 있음
type BadPlayer<E> = {
  name: string;
  extraInfo: E;
};

type ExtraRabbit = {
  favFood: string;
  realFood: number;
};

type RabbitPlayer = BadPlayer<ExtraRabbit>;

const rabbit: RabbitPlayer = {
  name: "chidol",
  extraInfo: { favFood: "kick", realFood: 32 },
};

const dog: BadPlayer<number> = {
  name: "mils",
  extraInfo: 234,
};

const dog2: BadPlayer<{ a: number; b: string }> = {
  name: "mils",
  extraInfo: { a: 123, b: "number" },
};

const dog3: BadPlayer<Array<number>> = {
  name: "mils",
  extraInfo: [1, 2, 3, 4, 5, 1],
};
