function calculateBill() {
    const dishCostElement = document.getElementById("dishCost");
    const numPeopleElement = document.getElementById("numPeople");
  
    const dishCostsString = dishCostElement.value;
    const numPeopleString = numPeopleElement.value;
  
    // Split the comma-separated input into arrays of dish costs and number of people
    const dishCosts = dishCostsString.split(',').map(cost => parseFloat(cost.trim(" ")));
    const numPeople = numPeopleString.split(',').map(num => parseInt(num.trim(" ")));
  
    if (dishCosts.length !== numPeople.length) {
      alert("Please enter the same number of dish costs and number of people sharing each dish.");
      return;
    }
  
    const totalBill = dishCosts.reduce((acc, cost, index) => acc + (cost + dishCosts[index++]));
    const billPerPerson = dishCosts.map((cost, index) => cost / numPeople[index++]);
  
    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Total Bill: $${totalBill.toFixed(2)}</p>`;
    resultElement.innerHTML += "<p>Bill per person:</p>";
    resultElement.innerHTML += "<ul>";
    billPerPerson.forEach((bill, index) => {
      resultElement.innerHTML += `<li>Per Person For Dish ${index + 1}: $${bill.toFixed(2)}</li>`;
    });
    resultElement.innerHTML += "</ul>";
  }
  