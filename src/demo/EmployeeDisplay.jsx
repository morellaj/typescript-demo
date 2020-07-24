import React from "react"

const EmployeeDisplay = (props) => {
  return (
    <div>
    {props.list.map(ele => {
      if(ele.email !== undefined){
        return(
          <div key={ele.email}>
            <div>First Name: {ele.firstName}</div>
            <div>Last Name: {ele.lastName}</div>
          </div>
        )
      }
    })}
    </div>
  )
}

export default EmployeeDisplay
