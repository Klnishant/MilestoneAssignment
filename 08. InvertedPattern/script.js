function printPattern() {
    const rowsInput = document.getElementById('row_num').value;
    const patternOutput = document.getElementById('result');
  
    // Clear any previous pattern
    patternOutput.innerHTML = '';
  
    // Check if the input is a positive integer
    const i = parseInt(rowsInput, 10);
    if (isNaN(i) || i < 1) {
      patternOutput.textContent = 'Please enter a positive integer greater than 0.';
      return;
    }
  
    // Build the inverted right-angled triangle pattern
    let pattern = '';
    for (let row = i; row >= 1; row--) {
      for (let j = 1; j <= row; j++) {
        pattern += '*';
      }
      pattern += '<br>'; // Move to the next line after each row
    }
  
    // Display the pattern
    patternOutput.innerHTML = pattern;
    document.getElementById("patternBox").style.backgroundColor="black";
    document.getElementById("patternBox").style.color="white";
  }
  