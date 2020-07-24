import React from 'react';
import {productCatalog} from "../demo/constants";

const Index = () => {
  const productNames = Object.keys(productCatalog);
  const list = productNames.map(product => {
    return (
    <div key={product} style={{display: 'flex', justifyContent: 'space-between', width: '400px'}}>
      <div>Product:{product}</div>
      <div>Price: {productCatalog[product].price}</div>
    </div>
    )})
  return (
    <div>
      {list}
    </div>
  )
}

export default Index
//       <div>Rating: {productCatalog[product].rating.average}</div>