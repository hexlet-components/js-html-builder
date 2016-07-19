// @flow

import Node from './Node';

export default class extends Node {
  constructor(name: string, options: Object = {}) {
    super(name, options);
  }

  toString() {
    return `<${this.name}${this.getOptionsAsLine()} />`;
  }
}
