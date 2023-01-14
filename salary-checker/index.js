const salaryPerYear = 100_000_000;
const salaryPerYearInRupiah = `Rp ${salaryPerYear}`;

console.log(`Salary/year = ${salaryPerYearInRupiah}/year`);

if (typeof salaryPerYear === "number") {
  if (salaryPerYear > 0) {
    console.log("Congratulations!");
    console.log(`Because you have a salary of ${salaryPerYearInRupiah}`);
  } else {
    console.log("Sorry to hear that.");
    console.log(`Because your salary is ${salaryPerYearInRupiah}`);
  }
}
