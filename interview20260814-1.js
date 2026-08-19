// 字节od手撕代码1

/* 

标题: 多尺寸虚拟列表

题目描述:
class ScrollList {
  constructor(opt: {
    list: { size: number, id: string }[],
    itemGap?: number,
    windowSize: number
  }) {
    // TODO
  }

  scrollTo = (i) => {
    // TODO
  }
}

测试用例:
const list = new ScrollList({
  list: [{ size: 10, id: '1' }],  // item height 10px
  windowSize: 5,                  // window height 5px, itemGap default 0px
})

// *scrollTop* update to 6px, return visible item ids: ['1']
console.log('test case 1:', list.scrollTo(6))

// *scrollTop* update to 10px, return visible item ids: []
console.log('test case 2:', list.scrollTo(10)) 

*/

// class的作用是100个相似对象的key抽出来形成模板, new的作用是传入value重新恢复成完整对象
// js没有冒号, 所有冒号和后面的内容都可以直接去掉, 这个是ts为了表示类型额外加出来的

class ScrollList {
  constructor(opt) {
    this.list = opt.list;
    this.windowSize = opt.windowSize;
    this.itemGap = opt.itemGap ? opt.itemGap : 0;
    this.offsets = [];

    let sum = 0;
    for (let item of this.list) {
      let itemTop = sum;
      let itemDown = itemTop + item.size;
      sum = itemDown + this.itemGap;
      this.offsets.push({ itemTop, itemDown });
    }
  }

  scrollTo = (windowTop) => {
    // 二分查找, 先找到左边界, 然后往右找
    let windowDown = windowTop + this.windowSize;
    let left = 0;
    let right = this.list.length - 1;
    let mid = -1;
    let resStart = -1;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      let itemTop = this.offsets[mid].itemTop;
      let itemDown = this.offsets[mid].itemDown;
      if (windowDown > itemTop && windowTop < itemDown) {
        resStart = mid;
        right = mid - 1;
      } else if (windowDown <= itemTop) {
        right = mid - 1;
      } else if (windowTop >= itemDown) {
        left = mid + 1;
      }
    }
    if (resStart === -1) {
      return [];
    }
    let res = [];
    for (let i = resStart; i < this.list.length; i++) {
      let itemTop = this.offsets[i].itemTop;
      if (windowDown > itemTop) {
        res.push(this.list[i].id);
      } else {
        break;
      }
    }
    return res;

    // 普通遍历, 每次都从头开始
    // let windowDown = windowTop + this.windowSize;
    // let sum = 0;
    // let res = [];
    // for (let i = 0; i < this.list.length; i++) {
    //   let item = this.list[i];
    //   let itemTop = sum;
    //   let itemDown = itemTop + item.size;
    //   sum = itemDown + this.itemGap;
    //   if (windowDown > itemTop && windowTop < itemDown) {
    //     res.push(item.id);
    //   }
    //   if (windowDown <= itemDown) {
    //     break;
    //   }
    // }
    // return res;
  };
}

const list = new ScrollList({
  list: [
    { size: 10, id: "1" }, // 0-10
    { size: 15, id: "2" }, // 13-28
    { size: 5, id: "3" }, // 31-36
  ],
  windowSize: 5,
  itemGap: 3,
});

console.log("@@@", list.scrollTo(0)); // 1
console.log("@@@", list.scrollTo(1)); // 1
console.log("@@@", list.scrollTo(5)); // 1
console.log("@@@", list.scrollTo(9)); // 1 2
console.log("@@@", list.scrollTo(10)); // 2
console.log("@@@", list.scrollTo(11)); // 2
console.log("@@@", list.scrollTo(12)); // 2
console.log("@@@", list.scrollTo(13)); // 2
console.log("@@@", list.scrollTo(14)); // 2
console.log("@@@", list.scrollTo(20)); // 2
console.log("@@@", list.scrollTo(27)); // 2 3
console.log("@@@", list.scrollTo(30)); // 3
console.log("@@@", list.scrollTo(40)); // 空
console.log("@@@", list.scrollTo(50)); // 空
