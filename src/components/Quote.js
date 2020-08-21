import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;
const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) {
    return null;
  }

  return (
    <ResultDiv>
      <Price>
        Price is: <span>{result.PRICE}</span>
      </Price>
      <Info>
        Highday: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Lowday: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Change last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Last update: <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultDiv>
  );
};

export default Quote;
