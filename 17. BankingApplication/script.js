const accounts = {
  Nishant: {
    name:"Nishant",
    balance: 5000,
  },
  Shrikant: {
    Name:"Shrikant",
    balance: 10000,
  },
  // Add more customers as needed...
};

function updateBalance(customerName, transactionAmount) {
  if (!(customerName in accounts)) {
    alert("Customer not found!");
    return;
  }

  const customer = accounts[customerName];

  if (transactionAmount >= 0) {
    customer.balance += transactionAmount;
    alert(`Deposit of ${transactionAmount} successful. New balance: ${customer.balance}`);
  } else {
    const absTransactionAmount = Math.abs(transactionAmount);
    if (customer.balance >= absTransactionAmount) {
      customer.balance -= absTransactionAmount;
      alert(`Withdrawal of ${absTransactionAmount} successful. New balance: ${customer.balance}`);
    } else {
      alert("Insufficient balance for withdrawal!");
    }
  }

  // Update the balance display on the page
  const balanceDisplay = document.getElementById("balanceDisplay");
  balanceDisplay.textContent = `Current balance for ${customer.name}: $${customer.balance}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const depositButton = document.getElementById("depositButton");
  const withdrawButton = document.getElementById("withdrawButton");

  depositButton.addEventListener("click", () => {
    const customerName = document.getElementById("customerName").value;
    const transactionAmount = parseFloat(document.getElementById("transactionAmount").value);

    updateBalance(customerName, transactionAmount);
  });

  withdrawButton.addEventListener("click", () => {
    const customerName = document.getElementById("customerName").value;
    const transactionAmount = -parseFloat(document.getElementById("transactionAmount").value);

    updateBalance(customerName, transactionAmount);
  });
});
