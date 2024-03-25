function displayStudentInfo(student) {
    for (const property in student) {
      console.log(`${property}: ${student[property]}`);
    }
  }
  
  // Example usage:
  const student = {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    grade: "A",
  };
  
  displayStudentInfo(student);
  
