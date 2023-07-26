function calculateBill() {
    const dishCostElement = document.getElementById("itemCost");
    const numPeopleElement = document.getElementById("quantity");
  
    const itemCostsString = dishCostElement.value;
    const quantityString = numPeopleElement.value;
  
    // Split the comma-separated input into arrays of dish costs and number of people
    const itemCosts = itemCostsString.split(',').map(cost => parseFloat(cost.trim(" ")));
    const quantity = quantityString.split(',').map(num => parseInt(num.trim(" ")));
  
    if (itemCosts.length !== quantity.length) {
      alert("Please enter the same number of dish costs and number of people sharing each dish.");
      return;
    }
  
    totalBill=0;

    for(let i=0;i<itemCosts.length;i++){
        totalBill+=itemCosts[i]*quantity[i];
    }
    document.getElementById("result").innerText=`Total Bill:$${totalBill}`
  }