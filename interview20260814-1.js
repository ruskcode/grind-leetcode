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
