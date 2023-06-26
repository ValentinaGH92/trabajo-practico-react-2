import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { usePizzaContext } from "../../../context/pizzaContext";
import { getPriceFormaterToClp } from "../../../utils/priceFormater";
import labels from "../../../translations/translationPizza.json";

const PizzaDetails = ({ img, title, ingredients, price, desc }) => {
  const {
    CARD: { INGREDIENTS, PRICE, DETAILS },
  } = labels;

  return (
    <div className="container">
      <Card>
        <div className="row">
          <div className="col-md-4">
            <Card.Img src={img} />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <strong>{INGREDIENTS}:</strong> {ingredients.join(", ")}
              </Card.Text>
              <Card.Text>
                <strong>{PRICE}:</strong> $ {getPriceFormaterToClp(price)}
              </Card.Text>
              <Card.Text>
                <strong>{DETAILS}:</strong> {desc}
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PizzaDetails;
