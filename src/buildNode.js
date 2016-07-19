// @flow

import PairedTag from './classes/PairedTag';
import SingleTag from './classes/SingleTag';

const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name: string, ...args: any) => {
  const f = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new f(name, ...args);
};
