import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const pizzaContext = createContext();

export const usePizzaContext = () => useContext(pizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzaOptions, setPizzaOptions] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0);

  const { data } = useFetch("/pizzas.json");

  useEffect(() => {
    if (data) {
      setPizzaOptions(data);
    }
  }, [data]);

  const context = {
    pizzaOptions,
    setPizzaOptions,
    cart,
    setCart,
    totalToPay,
    setTotalToPay,
  };

  return (
    <pizzaContext.Provider value={context}>{children}</pizzaContext.Provider>
  );
};
