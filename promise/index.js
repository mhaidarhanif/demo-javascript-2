function slowFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("failed"));
    }, 2000);
  });
}

async function asyncCall() {
  try {
    console.log("calling function");

    const result = await slowFunction();

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncCall();
