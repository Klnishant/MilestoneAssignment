const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0 || discountedPrice <= 0) {
      throw new Error("Invalid input. Prices must be greater than zero.");
    }
  
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  
  function calculateDiscount() {
    const originalPriceElement = document.getElementById("originalPrice");
    const discountedPriceElement = document.getElementById("discountedPrice");
  
    const originalPrice = parseFloat(originalPriceElement.value);
    const discountedPrice = parseFloat(discountedPriceElement.value);
  
    try {
      const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
      // Display the result
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `<p>You saved ${discountPercentage}% on this purchase!</p>`;
    } catch (error) {
      alert(error.message);
    }
  }
  