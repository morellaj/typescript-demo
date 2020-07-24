import React from 'react';
import {sendMessage} from '../demo/sendMessage';

const Index = () => {

  return (
    <div>
      <div>{sendMessage("email", {name: "Emily", address: "123@gmail.com"})}</div>
      <div>{sendMessage("phone", {name: "Thomas", number: "12345"})}</div>
    </div>
  )
}

export default Index
//       <div>{sendMessage("email", {name: "Sally", number: "12345@gmail.com"})}</div>