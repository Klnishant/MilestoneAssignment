function doubleQuantities() {
    const inputElement = document.getElementById("cartItems");
    const quantitiesString = inputElement.value;
    
    // Split the comma-separated input into an array of quantities
    const quantities = quantitiesString.split(',').map(quantity => parseInt(quantity.trim(), 10));
  
    // Double each quantity in the array
    const doubledQuantities = quantities.map(quantity => quantity * 2);
  
    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Doubled Quantities: " + doubledQuantities.join(", ");
  }
  