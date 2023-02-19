
// 击鼓传花

import ArrayQueue from "./01_实现队列结构Queue";

function test(nameList: string[], num: number) {
  const queue = new ArrayQueue<string>();
  nameList.forEach(value => queue.enQueue(value));
  // 判断条件是队列中只剩一个元素
  while(queue.size() > 1) {
    for (let i=1; i<num; i++) {
      // 出队
      const ele = queue.deQueue();
      // 入队
      queue.enQueue(ele!);
    }
    //此时前端的元素就是被淘汰的元素，出队即可
    queue.deQueue();
  }
  // console.log(queue.print());
  const lastName = queue.deQueue();
  //将最后一个人的位置返回
  return nameList?.indexOf(lastName!)
}

test(['niu','chao', 'jia', 'you'], 3)