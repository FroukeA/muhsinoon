// data
import React from "react";

// functions

// style

// components

export default function Img(props) {
  return <video className={props.class} id={props.class} autoplay="autoplay" muted loop>
    <source src={props.item.icon} type="video/mp4" />
  </video>;
}