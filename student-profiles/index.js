const dataStudents = [
  { name: "Abdehi" },
  { name: "Arif" },
  { name: "Bernhard" },
  { name: "Farhan" },
  { name: "Haidar" },
  { name: "Jeffry" },
  { name: "Karim" },
  { name: "Rofiq" },
];

for (let index = 0; index < dataStudents.length; index++) {
  const student = dataStudents[index];
  const newStudent = {
    name: `${student.name} S.T.`,
    age: 20 + index,
  };
  dataStudents[index] = newStudent;

  console.log(`${newStudent.name} is ${newStudent.age} years old`);
}

console.log(dataStudents);
