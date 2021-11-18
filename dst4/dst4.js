class MySet {
  constructor(arr = []) {
    this.arr = this.checkUnique(arr);
    this.size = arr.length;
  }

  checkUnique(arr) {
    const uniques = [];
    arr.forEach((ele) => {
      if (uniques.indexOf(ele) === -1) {
        uniques.push(ele);
      }
    });
    return uniques;
  }
  add(data) {
    if (this.arr.indexOf(data) === -1) {
      this.arr.push(data);
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  remove(data) {
    if (this.arr.indexOf(data) !== -1) {
      this.arr.splice(this.arr.indexOf(data), 1);
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  has(data) {
    if (this.arr.indexOf(data) === -1) {
      return false;
    } else if (this.arr.indexOf(data) >= 0) {
      return true;
    }
  }

  union(setA, ...sets) {
    sets.forEach((x) => {
      x.arr.forEach((y) => {
        setA.add(y);
      });
    });

    return setA;
  }
}
module.exports = MySet;
