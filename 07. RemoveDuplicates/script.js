function removeDuplicates(cart) {
    const newCart = [];
    const itemIds = new Set();
  
    for (const item of cart) {
      if (!itemIds.has(item.id)) {
        newCart.push(item);
        itemIds.add(item.id);
      }
    }
  
    return newCart;
  }
  
  const customerCart = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 1, name: 'Item 1', price: 10 }, // Duplicate
    { id: 3, name: 'Item 3', price: 20 },
    { id: 2, name: 'Item 2', price: 15 }, // Duplicate
  ];
  
  const newCart = removeDuplicates(customerCart);
  
  function displayCart(cart, elementId) {
    const cartElement = document.getElementById(elementId);
    cartElement.innerHTML = '';
  
    for (const item of cart) {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price}`;
      cartElement.appendChild(listItem);
    }
  }
  
  displayCart(customerCart, 'customerCart');
  displayCart(newCart, 'newCart');
  