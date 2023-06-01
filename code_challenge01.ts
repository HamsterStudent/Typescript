// 이 함수는 배열의 마지막 요소를 반환해야 합니다.
type Last = <Last>(arr: Last[]) => Last;

const last: Last = (arr) => {
  return arr[arr.length - 1];
};
const lastA = last([1, 2, 3, 4, 53]);
const lastB = last(["hamster", "cute", "pizza"]);
const lastC = last([true, false, true, true]);
const lastD = last([true, "string", 1234, false, { happy: "hamster" }]);

// 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type Prepend = <Prepend>(arr: Prepend[], item: Prepend) => Prepend[];

const prepend: Prepend = (arr, item) => {
  const array = [item, ...arr];
  return array;
};

const prependA = prepend([1, 2, 3, 4, 53], 3);
const prependB = prepend(["hamster", "cute", "pizza"], "string");
const prependC = prepend([true, false, true, true], false);
const prependD = prepend([true, "string", 1234, false], "hamster");

// 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서
// 하나의 배열로 반환합니다.
// type Mix = <Mix>(a : Mix[], b: Mix[] ) => Mix[];

function mix<Mix>(a: Mix[], b: Mix[]) {
  const array = [...a, b];
  array.sort(() => Math.random() - 0.5);
  return array;
}

const mixA = mix([1, 2, 3, 4, 53], [, 5, 6, 4, 8]);
const mixB = mix(["hamster", "cute", "pizza"], ["string", "cat", "pizza"]);

// 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
function count<Count>(arr: Count[]) {
  return arr.length;
}

const countA = count([1, 2, 6, 6, 4, 2, 3]);
const countB = count(["hamster", "kimch", "house"]);

// 첫번째 매개변수로 배열을,
// 두번째 매개변수로 받아온 item이
// 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후
// 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = <FindIndex>(
  arr: FindIndex[],
  item: FindIndex,
) => number | null;

const findIndex: FindIndex = (arr, item) => {
  const index = arr.indexOf(item);
  return index > -1 ? index : null;
};

const findIndexA = findIndex([1, 2, 3, 4, 5, 6, 7], 2);
const findIndexB = findIndex(["hamster", "cute", "pizza"], "cat");

// 첫번째 매개변수로 배열 arr을 받고,
// 두번째 매개변수로 숫자 startIndex,
// 세번째 매개변수 숫자 endIndex를 받습니다.
// 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터
// 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다.
// 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type Slice = {
  <T>(arr: T[], startIndex: number): T[];
  <T>(arr: T[], startIndex: number, endIndex?: number): T[];
};

const slice: Slice = (arr, startIndex, endIndex?: number) => {
  if (endIndex) return arr.slice(startIndex, endIndex);
  return arr.slice(startIndex);
};
function slice2<T>(arr: T[], startIndex: number, endIndex?: number) {
  if (endIndex) return arr.slice(startIndex, endIndex);
  return arr.slice(startIndex);
}

const sliceA = slice(["hamster", "cute", "pizza"], 0, 3);
const sliceB = slice2([1, 2, 3, 5, 4, 8, 6, 24, 7, 1], 0, 8);
const sliceC = slice([true, false, true, false], 0, 2);
const sliceD = slice2([true, "string", 1234, false], 0, 2);
