try {
  const username = prompt("Username:");
  const password = prompt("Password:");

  if (username === "") {
    throw Error("Please enter a username as a string");
  } else if (password === "") {
    throw Error("Password is not entered yet");
  } else {
    console.log("You're logged in!");
  }

  console.log("Login is finished");
} catch (error) {
  alert("Login is failed"); // for User
  console.error(error); // for Programmer
} finally {
  console.log("Program is finished");
}
