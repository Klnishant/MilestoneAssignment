function processNumbers() {
    const inputElement = document.getElementById("numberList");
    const numbersString = inputElement.value;
    
    // Split the comma-separated input into an array of numbers
    const numbers = numbersString.split(',').map(number => parseInt(number.trim(), 10));
  
    // Clear the previous result
    document.getElementById("result").innerHTML = "";
  
    // Loop through the array and find numbers that are divisible by 3 but not by 2
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
  
      // Check if the number is divisible by 3 but not by 2
      if (num % 3 === 0 && num % 2 !== 0) {
        // Append the result to the "result" div
        document.getElementById("result").innerHTML += num + " ";
      }
    }
  }
  