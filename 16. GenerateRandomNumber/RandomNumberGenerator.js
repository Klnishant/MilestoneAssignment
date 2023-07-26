// Self-invoking arrow function to generate a random number between 1 and 100
const randomNumberGenerator = (() => {
    // Generate a random number between 1 and 100 (inclusive)
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Display the random number in the console (you can use it in your game or application)
    console.log("Random Number:", randomNumber);
  
    // Return the random number
    return randomNumber;
  })();
  