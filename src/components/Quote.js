import React from 'react';

const Quote = ({ result }) => {
  if(Object.keys(result).length === 0){
    return null
  }

  console.log("RESULT IN QUOTE IS", result);
  return ( 
    <div>
      <p>Price is: <span>{result.PRICE}</span></p>
      <p>Highday: <span>{result.HIGHDAY}</span></p>
      <p>Lowday: <span>{result.LOWDAY}</span></p>
      <p>Change last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></p>
      <p>Last update: <span>{result.LASTUPDATE}</span></p>
    </div>
  );
}
 
export default Quote;