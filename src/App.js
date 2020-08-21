import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import image from './criptocoins.png';
import Form from './components/Form';
import criptocoinsService from './services/criptocoinsService';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {
  const [ coin, setCoin ] = useState('');
  const [ criptocoin, setCriptocoin ] = useState('');

  async function getData(){
    try {
      const result = await criptocoinsService.getFullData(coin, criptocoin);
      console.log("nueva consulta a bases de datos", result.DISPLAY[criptocoin][coin]);
    } catch (error) {
      console.log('Not connection possible!!!');
    }
  }

  useEffect( () => {
    if(coin === ''){
      return;
    }

    getData();
  }, [coin, criptocoin])

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt='imagen_of_criptocoins'
        />
      </div>
      <div>
        <Heading>
          Instant coin quote
        </Heading>
        <Form
          setCoin={setCoin}
          setCriptocoin={setCriptocoin}
        />
      </div>
    </Container>
  );
}

export default App;
