import React, { Fragment, useState } from "react";

const useCoin = () => {

  // State of custom hook
  const [state, setState] = useState('');

  const Select = () => (
    <Fragment>
      <label>Coin</label>
      <select>
        <option value='ES'>
          Euro
        </option>
      </select>
    </Fragment>
  );

  return [state, select, setState];
};

export default useCoin;
