# 스낵포 코딩 테스트 과제

- `/cart`에서 페이지 구현과제를 확인하실 수 있습니다.

# 알고리즘 과제

```
export class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  //1. 요소를 마지막에 삽입하는 기능 ex ) list.append(value)
  append(element) {
    this.dataStore[this.listSize] = element;
    this.listSize++;
  }

  //2. 마지막 요소를 삭제하는 기능 ex) list.pop()
  pop() {
    if (this.listSize <= 0) return null;
    const result = this.dataStore[--this.listSize];
    this.dataStore.length = this.listSize;
    return result;
  }

  //3. 특정 요소 삭제 ex ) list.remove(index)
  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1); //해당 배열 요소 삭제
      --this.listSize; //크기 1개 축소
      return true;
    }
    return false;
  }

  //4. 요소 전체 삭제 ex ) list.removeAll()
  removeAll() {
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  //5. 특정 요소 찾기 ex) list.find(index) : 해당 인덱스 위치의 값을 원한다면..?
  find(element) {
    return this.dataStore[element];
  }
  //5. 특정 요소 찾기 ex) list.find(element) : 해당 인자 검색 후 만족하는 첫번째 인덱스 리턴
  findIndex(element) {
    for (let i = 0; i < this.listSize; i++) {
      if (element === this.dataStore[i]) {
        return i;
      }
    }
    return -1;
  }
}
```
