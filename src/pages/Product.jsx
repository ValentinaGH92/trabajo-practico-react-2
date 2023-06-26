import { useParams } from "react-router-dom";
import PizzaDetails from "../components/Pizza/PizzaDetails";
import { usePizzaContext } from "../context/pizzaContext";
import { getCurrentPizza } from "../utils/getCurrentPizza";

const Product = () => {
  const { pizzaOptions } = usePizzaContext();
  const { pizzaId } = useParams();

  const currentPizza = getCurrentPizza(pizzaOptions, pizzaId);

  return <div>{currentPizza && <PizzaDetails {...currentPizza} />}</div>;
};

export default Product;
