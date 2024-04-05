// data
import React from "react";

// functions

// style

// components

export default function Label(props) {
  return (
    <label
      className={props.class}
      htmlFor={props.htmlFor}
    >
      <span
        className={`${props.class}-span`}
      >
        {props.labelText}
      </span>
    </label>
  );
}
