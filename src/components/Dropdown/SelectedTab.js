import React from "react";

const SelectedTab = ({ selected, handleDeselect }) => {
  const selectedList = selected.map((selected) => {
    return (
      <span
        className="selected"
        key={selected.id}
        id={`s-${selected.id}`}
        onClick={handleDeselect}
      >
        {selected.value}
        &nbsp; &#10005;
      </span>
    );
  });
  return selectedList;
};

export default SelectedTab;
