import React, { Fragment, useState } from "react";

const useCoin = (label, initialState, options) => {
  // State of custom hook
  const [state, setState] = useState(initialState);

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select
        onChange={ e => setState(e.target.value)}
        value={state}
      >
        <option value="ES">Select coin</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return [state, Select, setState];
};

export default useCoin;
