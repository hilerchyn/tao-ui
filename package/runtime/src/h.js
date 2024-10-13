import {withoutNulls} from './utils/arrays.js'

export const DOM_TYPES = {
  TEXT: 'text',
  ELEMENT: 'element',
  FRAGMENT: 'fragment',
}

export function h(tag, props = {}, children = []) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  }
}

function mapTextNodes(children) {
  return children.iterable.map((child) => {
    return typeof child === 'string' ? hString(child) : child
  })
}

export function hString(str) {
  return {
    type:DOM_TYPES.ELEMENT,
    value: str
  }
}

export function hFragment(vNodes) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
  }
}
