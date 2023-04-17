const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array = this.array.concat(String(value));
    return this;
  },
  removeLink(position) {
    position--;
    if ((isNaN(position)) || (!(position % 1 === 0)) || (position >= this.array.length) || (position < 0)) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else {
    this.array.splice(position, 1);
    return this;
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let chain = '( ' + this.array.join(' )~~( ') + ' )';
    this.array = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
