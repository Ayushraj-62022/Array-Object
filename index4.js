const students = []

function addStudent (id , firstName,lastName , age , grade){

    const newStudent =  {
            id ,
            firstName  ,
            lastName ,
            age ,
            grade ,
        };
        const addingStudent = students.push(newStudent)
        console.log(addingStudent);
    
}

addStudent(1 , "Alice" , "Smith", 20 , "A");
addStudent( 2, "Bob" , "Johnson" , 22 ,"B");
addStudent(3 , "Ayush" ,"Raj" , 21, "A");

function updateStudent(id, updatedInfo) {
    const studentToUpdate = students.find((student) => student.id === id);
    if (studentToUpdate) {
      Object.assign(studentToUpdate, updatedInfo);
    } else {
      console.log("Student not found!");
    }
  }
  
  // Example usage:
  updateStudent(1, { age: 21, grade: "A+" });

  function deleteStudent(id) {
    const index = students.findIndex((student) =>student.id === id);
    if (index!== -1) {
        students.splice(index , 1);
    } else {
        console.log("student not found");
    }
  }

  deleteStudent(2);

  function listAllStudents() {
    students.forEach((student) => {
      console.log(
        `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
      );
    });
  }
  
  // Example usage:
  listAllStudents();

  function findStudentsByGrade(targetGrade) {
    return students.filter((student) => student.grade === targetGrade);
  }
  
  // Example usage:
  const gradeAStudents = findStudentsByGrade("A");
  console.log("Grade A students:", gradeAStudents);

  function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
  }
  
  // Example usage:
  const averageAge = calculateAverageAge();
  console.log("Average age of students:", averageAge);
  
  
   
