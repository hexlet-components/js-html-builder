// @flow

import Node from './Node';

export default class extends Node {
  constructor(name: string, attributes: {} = {}) {
    super(name, attributes);
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}
