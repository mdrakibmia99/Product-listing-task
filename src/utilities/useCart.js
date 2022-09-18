function addToCartSingle(product, qty) {
    const cart = getFromCart();
    let isExist=cart.find((crt) => crt._id === product._id);
  
    if (!isExist) {
      product.quantity = qty;
      cart.push(product);
      localStorage.setItem("ProductListingCart", JSON.stringify(cart));
    } else {
      console.log("Product exist on cart.");
    }
  }
  
  
  function getFromCart() {
    const cart = localStorage.getItem("ProductListingCart");
    let items = null;
  
    if (cart) {
      items = JSON.parse(cart);
    } else {
      items = [];
    }
  
    return items;
  }
  
  function removeFromCart(pid) {
    const products = getFromCart();
    const matchedProducts = products.filter((product) => product._id !== pid);
  
    localStorage.setItem("ProductListingCart", JSON.stringify(matchedProducts));
  }
  
  export { addToCartSingle, removeFromCart };