// data
import React from "react";
import { forms } from "../../constants/conf";

// functions
import handleCreateFormArray from "../common/forms/forms";
import { createClass } from "./dataStyling";
import { createElement } from "../common/setup/commonUtils";

// components
import Form from "../../components/common/blocks/form/Form";
// import Input from "../../components/ui/inputs/Input";
import List from "../../components/common/blocks/list/List";
import Card from "../../components/common/blocks/cards/Card";
import Term from "../../components/common/elements/list/DescriptionTerm";
import Textdescription from "../../components/common/elements/list/DescriptionDetail";
import TextItem from "../../components/common/elements/list/ListItem";
import CustomBoxInput from "../../components/ui/groups/CustomBoxInput";
import Button from "../../components/ui/buttons/Button";
import Img from '../../components/ui/visuals/Img';
import Video from '../../components/ui/visuals/Video'


// variables

// *** Render data ***
export function renderElementItems(array) {
  return array.map((item, i) => {
    let todo = null;
    if (item.type === "card") {
      return (
        // DOM is a card
        // render card !!! content = interactive created by creatElement
        renderComponent(item, "")
      );
    }
    if (item.type === "list" || item.type === "description_group") {
      // DOM is a list of any type or group dd
      // render list !!! type = trough props
      todo = renderComponent(item, i, null);
    } else if (item.parts.length > 0) {
      // Nested DOM
      if (item.element === 'a') {
        todo = (
          <item.element
            key={i}
            className={createClass(item)}
            href={item.link}
            target={item.target_blank}
          >
            {renderElementItems(item.parts)}
          </item.element>
        );
      } else {
        todo = (
          <item.element
            key={i}
            className={createClass(item)}
          >
            {renderElementItems(item.parts)}
          </item.element>
        );
      }
    } else {
      // Single DOM
      if (
        item.type === "description" ||
        item.type === "term" ||
        item.type === "textItem" ||
        item.type === "button" ||
        item.type === "customBoxInput" ||
        item.type === "img"
      ) {
        return renderComponent(item, i, null);
      } else {
        todo = renderElement(item, i, null);
      }
    }

    return todo;
  });
}

export function renderElement(item, key) {
  if (item.type === "form") {
    // DOM is a form
    // collect the form data
    const array = handleCreateFormArray(
      forms,
      null,
      item.id,
      null,
      null,
      null
    );

    return renderComponent(item, "form" + key, array);
  } else if (item.element === 'a') {
    return (
      <item.element
        key={"element" + key}
        className={createClass(item)}
        href={item.link} target={item.target_blank}
      >
        {item.label}
      </item.element>
    )
  } else if (item.parts[0] !== undefined) {
    if (item.part[0].type === "card") {
      return (
        // DOM is a card
        // render card !!! content = interactive created by creatElement
        renderComponent(item, "")
      );
    }
  } else {
    if (
      item.type === "img"
    ) {
      return renderComponent(item, item.id, null);
    } else if (
      item.type === "video"
    ) {
      return renderComponent(item, item.id, null)
    }
    else {
      return (
        <item.element
          key={"element" + key}
          className={createClass(item)}
        >
          {item.label}
        </item.element>
      );
    }
  }
}

export function renderComponent(item, key, array, load) {
  switch (item.type) {
    case "list":
      return (
        <List
          key={"list" + key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
        />
      );
    case "card":
      return (
        <Card
          key={key}
          class={createClass(item)}
          content={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
        />
      );
    case "form":
      return (
        <Form
          key={key}
          class={createClass(item)}
          array={array}
        />
      );
    case "term":
      return (
        <Term
          key={key}
          class={createClass(item)}
          item={item}
        />
      );
    case "description":
      return (
        <Textdescription
          key={key}
          class={createClass(item)}
          item={item}
        />
      );
    case "customBoxInput":
      return (
        <CustomBoxInput
          key={key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
          content={item.parts}
        />
      );
    case "item":
      return (
        <TextItem
          key={key}
          class={createClass(item)}
          item={item}
        />
      );
    case "img":
      return (
        <Img
          key={key}
          class={createClass(item)}
          item={item}
        />
      )
    case "video":
      return (
        <Video
          key={key}
          class={createClass(item)}
          item={item}
        />
      )
    case "button":
      return (
        <Button
          key={key}
          class={createClass(item)}
          item={item}
          label={item.label}
          onClick={item.function}
        />
      );

    default:
      console.log(`ERROR: no types are matching ${item.type}.`);
  }

  load = false;
}