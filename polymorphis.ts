interface SStorage<T> {
  // key가 제한되지 않은 오브젝트를 정의하게 해 줌
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<boolean>();
