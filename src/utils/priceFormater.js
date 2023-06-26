const getPriceFormaterToClp = (price) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const getTotalPrice = (cart) =>
  getPriceFormaterToClp(cart.reduce((sum, pizza) => sum + pizza.price, 0));

export { getPriceFormaterToClp, getTotalPrice };
