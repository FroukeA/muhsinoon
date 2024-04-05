// data

// functions

// components

// variables

// *** Add className ***
let c = ``;

export function createClass(item) {
  if (item.ref) {
    if (item.class.length > 0) {
      c = `${item.ref}__${item.type}`;
      item.class.forEach((e) => {
        c = c + ` ${item.ref}__${item.type}--${e.label}`;
      });
    } else {
      c = `${item.ref}__${item.type}`;
    }
  } else {
    if (item.class.length > 0) {
      item.class.forEach((e) => {
        c = `${item.type} ${item.type}--${e.label}`;
      });
    } else {
      c = `${item.type}`;
    }
  }

  return c;
}