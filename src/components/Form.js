import React from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
 
  const COINS = [ 
    { code: 'USD', name: 'American Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'Eur', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];

  const [ state, Select ] = useCoin('Select coin', '', COINS);

  return (
    <form>
      <Select />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
