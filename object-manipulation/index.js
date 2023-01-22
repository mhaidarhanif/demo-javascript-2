const student = {
  name: "Haidar",
  age: 20,
  isAdmin: true,
  courses: ["html", "css", "js"],
};

const stringifiedStudent = JSON.stringify(student, null, 2);

console.log(student);
console.log(typeof stringifiedStudent); // we've got a string!
console.log(stringifiedStudent);
