import { Button } from "react-bootstrap";
import labels from "../../../translations/translationPizza.json";
import { useNavigate } from "react-router-dom";
import { usePizzaContext } from "../../../context/pizzaContext";
import { getCurrentPizza } from "../../../utils/getCurrentPizza";

const Buttons = ({ pizzaId }) => {
  const navigate = useNavigate();
  const { pizzaOptions, setCart } = usePizzaContext();
  const currentPizza = getCurrentPizza(pizzaOptions, pizzaId);

  const {
    CARD: { SHOW_MORE, ADD_TO_CARD },
  } = labels;

  const handlerShowMore = () => {
    navigate(`/product/${pizzaId}`);
  };

  const handlerAddToCart = () => {
    setCart((previusCart) => [...previusCart, currentPizza]);
  };

  return (
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center">
        <Button variant="info" onClick={handlerShowMore}>
          {SHOW_MORE}
        </Button>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <Button variant="danger" onClick={handlerAddToCart}>
          {ADD_TO_CARD}
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
