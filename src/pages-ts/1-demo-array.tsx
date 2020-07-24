import React from 'react';
import EmployeeDisplay from "../demo-ts/EmployeeDisplay";
import {employeeList} from "../demo-ts/constants";

const Index = () => {
  employeeList.push({ FirstName: "Alex", LastName: "Morelli" });
  return (
    <div>
      <EmployeeDisplay list={employeeList} />
    </div>
  )
}

export default Index