

import Node from './Node';

export default function SingleTag(name: string, options: {} = {}) {
  Node.apply(this, [name, options]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getOptionsAsLine()} />`;
};
