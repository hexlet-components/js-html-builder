// @flow

export default class {
  name: string;
  options: Object;

  constructor(name: string, options: Object) {
    this.name = name;
    this.options = options;
  }

  getOptionsAsLine() {
    return Object.keys(this.options).reduce((acc, key) =>
      `${acc} ${key}="${this.options[key]}"`, '');
  }
}
