// @ts-check

import { identity } from 'lodash';
import buildNode from './buildNode';

const propertyActions = [
  {
    name: 'body',
    check: (arg) => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: (arg) => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: (arg) => arg instanceof Object,
    process: identity,
  },
];

const getPropertyAction = (arg) => propertyActions.find(({ check }) => check(arg));

/**
 * Parse DSL to AST
 * @example
 * const data = ['html', [
 *   ['head', [
 *     ['title', 'hello, hexlet!'],
 *   ]],
 *   ['body', [
 *     ['div', { class: 'separator' }],
 *     ['h1', { class: 'header' }, 'html builder example'],
 *     ['div', [
 *       ['img', { class: 'image', href: '#' }],
 *       ['span', 'span text2'],
 *     ]],
 *   ]],
 * ]];
 *
 * const ast = parse(data);
 * ast.toString();
 *
 * // '<html>
 * // <head><title>hello, hexlet!</title></head>
 * // <body><div class="separator"></div>
 * // <h1 class="header">html builder example</h1>
 * // <div><img class="image" href="#"><span>span text2</span>
 * // </div></body></html>'
 */
const parse = (data) => {
  const [first, ...rest] = data;

  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };

  const args = rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);

  return buildNode(args.name, args.attributes, args.body, args.children);
};

export default parse;
