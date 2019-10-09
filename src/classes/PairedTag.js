import Node from './Node';

export default class extends Node {
  constructor(name, attribues = {}, body = '', children = []) {
    super(name, attribues);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0
      ? this.children.join('')
      : this.body;

    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }
}
