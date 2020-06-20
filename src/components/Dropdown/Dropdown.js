import React, { Component } from "react";
import OptionList from "./OptionList";
import SelectedTab from "./SelectedTab";
import "./Dropdown.css";

function debounce(func, wait, immediate = false) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      options: props.options,
      displayedOptions: props.options,
      selected: [],
    };
  }

  handleSelect = (idx) => {
    this.setState(({ displayedOptions, selected }) => {
      if (selected.map((a) => a.id).includes(idx)) {
        return null;
      }
      return {
        selected: [
          ...selected,
          ...displayedOptions.filter(({ id }) => id === idx),
        ],
      };
    });
  };

  handleDeselect = (e) => {
    e.preventDefault();
    let idx = e.target.id.split("-")[1];
    this.setState(({ selected }) => {
      return {
        selected: selected.filter(({ id }) => id !== idx),
      };
    });
  };

  match(value, search) {
    return value.toLowerCase().indexOf(search.toLowerCase()) > -1;
  }

  handleChange = (e) => {
    let idx = e.target.selectedOptions[0].id;
    this.handleSelect(idx);
  };

  _debouncedSearch = (e) => {
    return debounce(this.inputChangeHandler(e), 5000);
  };

  inputChangeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { selected } = this.state;
    const displayedOptions = this.props.options.filter((op) =>
      this.match(op.value, this.state.inputValue)
    );

    return (
      <div>
        <div className="input-container">
          <SelectedTab
            selected={selected}
            handleDeselect={this.handleDeselect}
          />
          <input type="text" onChange={this._debouncedSearch}></input>
        </div>

        <select name="dropdown" id="dropdown" onChange={this.handleChange}>
          <OptionList displayedOptions={displayedOptions} />
        </select>
      </div>
    );
  }
}

export default Dropdown;
