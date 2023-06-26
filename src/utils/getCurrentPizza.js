const getCurrentPizza = (pizzaOptions, pizzaId) =>
  pizzaOptions?.find((pizza) => pizza.id === pizzaId);

export { getCurrentPizza };
