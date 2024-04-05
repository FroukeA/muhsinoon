// data
import React from "react";
// { useState } if need put beside React
// import logo from '../../assets/static/png/logo/logoSloganSame.png';
import {
  header__content,
  main__content
} from "../../constants/conf";

// functions
import { createElement } from "../../utils/common/setup/commonUtils.js";
import { createClass } from "../../utils/data/dataStyling";

// style
import "../../assets/style/base/app.scss";

// components
import Main from "../main/Main";

// --- common ---
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

export default function App() {
  return (
    <div className="App">

      {/* common */}
      <Header
        content={header__content}
        createElement={createElement}
        createClass={createClass}
      />

      {/* unique */}
      <Main
        content={main__content}
        createElement={createElement}
        createClass={createClass}
      />

      {/* common */}
      < Footer
        content={''}
      // createElement={createElement}
      // createClass={createClass}
      />
    </div >
  );
}
