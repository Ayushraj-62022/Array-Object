const student = {
    name: "Alice",
    age: 20,
  };
  
  Object.preventExtensions(student);

  const extensibleStatus = Object.isExtensible(student);
  console.log("Is student extensible?", extensibleStatus);

const teacher = {
  subject: "Math",
};
Object.seal(teacher);

const sealedStatus = Object.isSealed(teacher);
console.log("Is teacher sealed?", sealedStatus);


  