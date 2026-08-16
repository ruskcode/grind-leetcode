// 字节od手撕代码

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
    this.itemGap = opt.itemGap ? opt.itemGap : 0;
    this.windowSize = opt.windowSize;
    this.offsets = [];

    let sum = 0;
    for (let i = 0; i < this.list.length; i++) {
      let item = this.list[i];
      let itemUp = sum;
      let itemDown = itemUp + item.size;
      sum = itemDown + this.itemGap;
      this.offsets.push({ id: item.id, itemUp, itemDown });
    }
    console.log("@@@", this.offsets);
  }

  scrollTo = (pos) => {
    let res = this.search2(pos);
    return res;
  };

  // 调用100次scrollTo使用二分查找
  search2 = (pos) => {
    let windowUp = pos;
    let windowDown = pos + this.windowSize;
    let res = [];

    // 找左边界
    let resStart = -1;
    let left = 0;
    let right = this.list.length - 1;
    let mid = -1;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      let item = this.offsets[mid];
      let itemDown = item.itemDown;
      let itemUp = item.itemUp;
      if (windowUp < itemDown && windowDown > itemUp) {
        resStart = mid;
        right = mid - 1;
      } else if (windowUp >= itemDown) {
        left = mid + 1;
      } else if (windowDown <= itemUp) {
        right = mid - 1;
      }
    }
    console.log("@@@", mid, left, right, resStart);

    // 左边界没找到直接结束;
    if (resStart === -1) {
      return [];
    }

    // 从左边界向右找
    res.push(this.list[resStart].id);
    for (let i = resStart + 1; i < this.list.length; i++) {
      let item = this.offsets[i];
      let itemDown = item.itemDown;
      let itemUp = item.itemUp;
      if (windowDown > itemUp) {
        res.push(this.list[i].id);
      } else {
        break;
      }
    }

    return res;
  };

  // 只调用一次scrollTo使用普通查找
  search1 = (pos) => {
    let windowUp = pos;
    let windowDown = pos + this.windowSize;
    let sum = 0;
    let res = [];
    for (let i = 0; i < this.list.length; i++) {
      let item = this.list[i];
      let itemUp = sum;
      let itemDown = itemUp + item.size;
      sum = itemDown + this.itemGap;

      if (itemDown > windowUp && itemUp < windowDown) {
        res.push(item.id);
      }
    }

    return res;
  };
}

const list = new ScrollList({
  list: [
    { size: 10, id: "1" },
    { size: 20, id: "2" },
    { size: 15, id: "3" },
  ],
  windowSize: 5,
});

console.log("test case 1:", list.scrollTo(29));
