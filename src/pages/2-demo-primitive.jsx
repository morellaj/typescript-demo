import React, { useState } from 'react';
import ReverseCharacters from "../demo/ReverseCharacters";
import {initialDisplay} from "../demo/constants"

const Index = () => {
  const [display, setDisplay] = useState(initialDisplay);
  const list = display.split('').map(character => <div key={character}>{character}</div>)
  return (
    <div>
      {list}
      <ReverseCharacters setDisplay={setDisplay} />
    </div>
  )
}

export default Index
