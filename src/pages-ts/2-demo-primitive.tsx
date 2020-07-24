import React, { useState } from 'react';
import ReverseCharacters from "../demo-ts/ReverseCharacters";

const Index = () => {
  const [display, setDisplay] = useState<string>("123456789");
  const list = display.split('').map(character => <div>{character}</div>)
  return (
    <div>
      {list}
      <ReverseCharacters setDisplay={setDisplay} />
    </div>
  )
}

export default Index
