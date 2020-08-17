import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCriptocoin from "../hooks/useCriptocoin";
import criptocoinsService from "../services/criptocoinsService";
import Error from './Error';

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

const Form = ( { setCoin, setCriptocoin }) => {

  const [ listCriptocoins, setListCriptocoins ] = useState([]);
  const [ error, setError ] = useState(false);
 
  const COINS = [
    { code: 'USD', name: 'American Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'Eur', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];

  const [ coin, SelectCoin ] = useCoin('Select coin', '', COINS);
  const [ criptocoin, SelectCriptocoin ] = useCriptocoin('Select criptocoin', '', listCriptocoins);

  async function getData(){
    try {
      const result = await criptocoinsService.consultAPI();
      setListCriptocoins(result.Data);
    } catch (error) {
      console.log('Not connection possible!!!');
    }
  }

  useEffect( () =>  {
    getData();
  }, []);

  const quoteCurrency = e => {
    e.preventDefault();

    if( coin === '' || criptocoin === '' ){
      setError(true);
        return;
    } else{
      setError(false);
    }
  }

  return (
    <form
      onSubmit={ quoteCurrency }
    >
      {error ? <Error message='All fields are required'/> : null}
      <SelectCoin />
      <SelectCriptocoin/>
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
