import React from "react"

const ChangeCharacters = (props) => {
  return (
    <div onClick={() => props.setDisplay(987654321)}>
      Reverse the characters!
    </div>
  )
}

export default ChangeCharacters
