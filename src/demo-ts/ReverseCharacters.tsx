import React, {Dispatch, SetStateAction} from "react"

const ChangeCharacters = (props: {setDisplay: Dispatch<SetStateAction<number>>}) => {
  return (
    <div onClick={() => props.setDisplay(987654321)}>
      Reverse the characters!
    </div>
  )
}

export default ChangeCharacters
