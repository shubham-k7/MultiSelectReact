import React from "react";

const OptionList = ({ displayedOptions }) => {
  const optionList = displayedOptions.map((option) => {
    return (
      <option value={option.value} key={option.id} id={option.id}>
        {option.value}
      </option>
    );
  });
  return optionList;
};

export default OptionList;
