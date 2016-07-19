// @flow

import PairedTag from './objects/PairedTag';
import SingleTag from './objects/SingleTag';

const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name: string, ...args: any) => {
  const f = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new f(name, ...args);
};
