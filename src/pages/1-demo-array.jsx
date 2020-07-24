import React from 'react';
import EmployeeDisplay from "../demo/EmployeeDisplay";
import {employeeList} from "../demo/constants";

const Index = () => {
  return (
    <div>
      <EmployeeDisplay list={employeeList} />
    </div>
  )
}

export default Index
// employeeList.push({ FirstName: "Sample", LastName: "Sample" });