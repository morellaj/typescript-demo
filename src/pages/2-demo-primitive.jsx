import React, { useState } from 'react';
import ReverseCharacters from "../demo/ReverseCharacters";

const Index = () => {
  const [display, setDisplay] = useState("123456789");
  const list = display.split('').map(character => <div>{character}</div>)
  return (
    <div>
      {list}
      <ReverseCharacters setDisplay={setDisplay} />
    </div>
  )
}

export default Index
