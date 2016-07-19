// @flow

import Node from './Node';

export default function PairedTag(name: string, options: {} = {}, body: string = '', children: [Node] = []) {
  Node.apply(this, [name, options]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype = Object.create(Node.prototype);

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getOptionsAsLine()}>${value}</${this.name}>`;
};
