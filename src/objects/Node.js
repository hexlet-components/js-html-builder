// @ts-check

export default function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes)
    .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
};
