// Your implementation goes here

class Stack {
  // class methods
  constructor(...args) {
    this.stack = args;
  }

  get size() {
    return this.stack.length;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack.pop();
    }
  }

  peek() {
    const [lastEl] = this.stack.slice(-1);
    return lastEl;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  swap() {
    const sLength = this.stack.length;

    [this.stack[sLength - 1], this.stack[sLength - 2]] = [
      this.stack[sLength - 2],
      this.stack[sLength - 1],
    ];
  }
}

module.exports = Stack;
