import React from 'react';
import EmployeeDisplay from "../demo/EmployeeDisplay";
import {employeeList} from "../demo/constants";

const Index = () => {
employeeList.push({ FirstName: "Alex", LastName: "Morelli" });

  return (
    <div>
      <EmployeeDisplay list={employeeList} />
    </div>
  )
}

export default Index
// employeeList.push({ FirstName: "Alex", LastName: "Morelli" });