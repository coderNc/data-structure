function lastRemaining(n: number, m: number): number {

  const queue: number[] = [];
  Array(n).fill(1).forEach((value, index) => queue.push(index));
  // console.log(queue);
  
  // 判断条件是队列中只剩一个元素
  while(queue.length > 1) {
    for (let i=1; i<m; i++) {
      // 出队
      const ele = queue.shift();
      // 入队
      queue.push(ele!);
    }
    // console.log(queue);
    //此时前端的元素就是被删除的元素，出队即可
    queue.shift();
  }
  const res = queue.shift();
  return res!;
};

console.log(lastRemaining(70866,116922));
