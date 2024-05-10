// Write your solution in this file!
const employee= {
    name: "Ellen",
    streetAddress: "Oak Street"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};

    newObj[key] = value;
return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue (
    name, "Melissa"
);

const employeeTwo = {
    name: "Jack",
    streetAddress: "Boulevard Street"
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  const newEmployeeTwo = destructivelyUpdateEmployeeWithKeyAndValue(employeeTwo, "name", "Tim");


  const employeeThree= {
    name: "Rachel",
    streetAddress: "Moss Street"
}
function deleteFromEmployeeByKey(obj, key, value) {
    const deleteObj = {...obj};

    deleteObj[key] = value;
return deleteObj;
}

delete employeeThree.name;


const employeeFour = {
    name: "Jess",
    address: "Pine Street",
  };
  
  function destructivelyDeleteFromEmployeeByKey(obj, key) {
   delete obj[key]
  
    return obj;
  }
  
  destructivelyDeleteFromEmployeeByKey(employeeFour, "name");