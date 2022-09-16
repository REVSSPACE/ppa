import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Layout
         </a>

      <a className="menu-item" href="/">
        Building
      </a>

      <a className="menu-item" href="/">
        Reclassification
      </a>

    </Menu>
  );
};
