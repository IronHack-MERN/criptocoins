import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCriptocoin from "../hooks/useCriptocoin";
import criptocoinsService from "../services/criptocoinsService";

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

  const [ listCriptocoins, setListCriptocoins ] = useState([]);
 
  const COINS = [
    { code: 'USD', name: 'American Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'Eur', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];

  const [ state, SelectCoin ] = useCoin('Select coin', '', COINS);
  const [ criptocoin, SelectCriptocoin ] = useCriptocoin('Select criptocoin', '', listCriptocoins);

  async function getData(){
    try {
      const result = await criptocoinsService.consultAPI();
      console.log("***** CRIPTOCOINS FROM API ********", result.Data);
      setListCriptocoins(result.Data);
    } catch (error) {
      console.log('Not connection possible!!!');
    }
  }

  useEffect( () =>  {
    getData();
  }, []);

  return (
    <form>
      <SelectCoin />
      <SelectCriptocoin/>
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
