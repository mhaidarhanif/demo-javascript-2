const dataStudents = [
  { id: 1, name: "Abdehi", score: 98 },
  { id: 2, name: "Arif", score: 96 },
  { id: 3, name: "Farhan", score: 95 },
  { id: 4, name: "Haidar", score: 65 },
  { id: 5, name: "Jeffry", score: 80 },
  { id: 6, name: "Karim", score: 75 },
  { id: 7, name: "Rofiq", score: 85 },
];

function searchStudents(students, keyword) {
  const foundStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(keyword);
  });
  return foundStudents;
}

function calculateStudentTotalScores(students) {
  const studentTotalScores = students.reduce((previousValue, student) => {
    return previousValue + student.score;
  }, 0);

  return studentTotalScores;
}

const foundStudents = searchStudents(dataStudents, "ha");
const studentTotalScores = calculateStudentTotalScores(dataStudents);

console.log("Found students:", foundStudents);
console.log("Student Total Scores:", studentTotalScores);
console.log(
  "Average score:",
  Math.round(studentTotalScores / dataStudents.length)
);
