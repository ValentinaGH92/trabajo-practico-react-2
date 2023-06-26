import "./pizza.css";
import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Buttons from "./Buttons";
import { getPriceFormaterToClp } from "../../../utils/priceFormater";
import { capitalizeFirstLetter } from "../../../utils/capitalize";
import labels from "../../../translations/translationPizza.json";

const PizzaCard = ({ pizzaId, image, title, ingredients, price }) => {
  const {
    CARD: { INGREDIENTS, PRICE },
  } = labels;

  return (
    <Card className="pizza-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(title)}</Card.Title>
        <Card.Text>
          <strong>{INGREDIENTS}:</strong> {ingredients.join(", ")}
        </Card.Text>
        <Card.Text>
          <strong>{PRICE}:</strong> $ {getPriceFormaterToClp(price)}
        </Card.Text>
      </Card.Body>

      <Buttons pizzaId={pizzaId} />
    </Card>
  );
};

export default PizzaCard;
