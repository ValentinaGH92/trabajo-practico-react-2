import { Container } from "react-bootstrap";
import PizzaList from "../components/Pizza/PizzaList";
import { usePizzaContext } from "../context/pizzaContext";

const Home = () => {
  const { pizzaOptions, setPizzaOptions } = usePizzaContext();
  console.log("pizzaOptions: ", pizzaOptions);
  return (
    <Container>
      <div>
        <h1>Tini's Pizza</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>

        <PizzaList />
      </div>
    </Container>
  );
};

export default Home;
