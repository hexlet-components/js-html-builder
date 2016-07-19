// @flow

export default function Node(name: string, options: {}) {
  this.name = name;
  this.options = options;
}

Node.prototype.getOptionsAsLine = function getOptionsAsLine() {
  return Object.keys(this.options).reduce((acc, key) =>
    `${acc} ${key}="${this.options[key]}"`, '');
};
