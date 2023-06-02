type Words = {
  [key: string]: string;
};
type Bulk = {
  term: string;
  def: string;
}[];

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // 단어를 추가함.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // 단어의 정의를 리턴함
  get(term: string) {
    return this.words[term];
  }
  // 단어를 삭제함
  delete(word: Word) {
    if (this.words[word.term] !== undefined) {
      delete this.words[word.term];
    }
  }
  // 단어를 업데이트 함
  update(term: string, def: string) {
    if (this.words[term] !== def) {
      this.words[term] = def;
    }
  }
  // 사전 단어를 모두 보여줌
  showAll() {
    return Object.keys(this.words);
  }
  // 사전 단어들의 총 갯수를 리턴함
  count() {
    return Object.keys(this.words).length;
  }
  // 단어를 업데이트 함. 존재하지 않을시 추가
  upsert(term: string, def: string) {
    this.words[term] = def;
  }
  // 해당 단어가 사전에 존재하는지 여부를 알려줌.
  exists(term: string) {
    if (this.words[term] === undefined) return false;
    return true;
  }
  // 여러개의 단어를 한번에 추가할 수 있게 해줌
  bulkAdd(bulk: Bulk) {
    for (let i = 0; i < Object.keys(bulk).length; i++) {
      this.words[bulk[i].term] = bulk[i].def;
    }
  }
  // 여러개의 단어를 한번에 삭제할 수 있게 해줌
  bulkDelete(bulk: string[]) {
    bulk.map((x: string) => {
      if (this.words[x] !== undefined) {
        delete this.words[x];
      }
    });
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const dict = new Dict();
const hamster = new Word("hamster", "cute animal");
const bear = new Word("bear", "big animal");

dict.add(hamster);
dict.add(bear);
dict.update("hamster", "baby");

dict.upsert("ham", "meat");
dict.upsert("bear", "cute");

const addBulk = [
  { term: "김치", def: "대박이네~" },
  { term: "아파트", def: "비싸네~" },
  { term: "치킨", def: "맛있네에" },
];
dict.bulkAdd(addBulk);
dict.bulkDelete(["김치", "아파트"]);

const show = dict.showAll();
console.log(show);
