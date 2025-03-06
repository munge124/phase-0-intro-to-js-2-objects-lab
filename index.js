// Write your solution in this file!

// Employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // 1. Update Employee (Non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // 2. Destructively Update Employee (Mutates the original object)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. Delete Property from Employee (Non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructively Delete Property from Employee (Mutates the original object)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
