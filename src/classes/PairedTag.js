// @flow

import Node from './Node';

export default class extends Node {
  children: [Node];
  body: string;

  constructor(name: string, options: Object = {}, body: string = '', children: [Node] = []) {
    super(name, options);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ?
      this.children.map(child => child.toString()).join('') : this.body;
    return `<${this.name}${this.getOptionsAsLine()}>${value}</${this.name}>`;
  }
}
