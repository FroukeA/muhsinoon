// data
import React from "react";

// functions

// style

// components
import Term from "../../elements/list/DescriptionTerm";
import Textdescription from "../../elements/list/DescriptionDetail";
import TextItem from "../../elements/list/ListItem";

function renderDL(props) {
  return (
    <dl className={props.createClass(props.item)}>
      {props.item.parts.map((item, i) => {
        return item.parts.length > 0 ? (
          <React.Fragment key={"list" + i}>
            {props.createElement(item)}
          </React.Fragment>
        ) : item.element === "dt" ? (
          <Term key={"list" + i} class={props.createClass(item)} item={item.label} />
        ) : (
          <Textdescription key={"list" + i} class={props.createClass(item)} item={item.label} />
        );
      })}
    </dl>
  );
}

function renderUL(props) {
  return (
    <ul className={props.createClass(props.item)}>
      {props.item.parts.map((item, i) => {
        return item.parts.length > 0 ? (
          <React.Fragment key={"list" + i}>
            {props.createElement(item)}
          </React.Fragment>
        ) : (
          < TextItem key={"list" + i} class={props.createClass(item)} item={item} />
        );
      })}
    </ul>
  );
}

export default function List(props) {
  return (
    <React.Fragment>
      {props.item.element === "dl" ? renderDL(props) : renderUL(props)}
    </React.Fragment>
  );
}
