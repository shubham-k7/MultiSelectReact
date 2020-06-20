import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";
import options from "../options";

class Container extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Dropdown
        options={this.state.options}
      />
    );
  }
}

export default Container;
