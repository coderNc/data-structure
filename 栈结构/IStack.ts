interface IStack<T> {
  push: (T) => void,
  pop: () => T | undefined,
  peek: () => T | undefined,
  isEmpty: () => boolean,
  size: () => number,
  // printf: () => any,
}

export default IStack;