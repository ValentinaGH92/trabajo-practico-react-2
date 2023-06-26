import "./styles.css";
import React from "react";
import { Button, Image, ListGroup } from "react-bootstrap";
import { usePizzaContext } from "../../context/pizzaContext";
import { getPriceFormaterToClp } from "../../utils/priceFormater";
const CartPizza = () => {
  const { cart } = usePizzaContext();

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay pizzas en el carrito</p>
      ) : (
        <ListGroup>
          {cart.map((pizza) => (
            <ListGroup.Item key={pizza.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="cell-pizza-cart">
                  <Image
                    className="image-cart-pizza"
                    src={pizza.img}
                    alt={pizza.name}
                  />
                  <span>{pizza.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "10px" }}>
                    Precio: $ {getPriceFormaterToClp(pizza.price)}
                  </span>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Button variant="primary" style={{ marginTop: "20px", float: "right" }}>
        Continuar la compra
      </Button>
    </div>
  );
};

export default CartPizza;
