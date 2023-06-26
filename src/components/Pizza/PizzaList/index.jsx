import React, { useEffect } from "react";
import PizzaCard from "../PizzaCard";
import { usePizzaContext } from "../../../context/pizzaContext";
import { useFetch } from "../../../hooks/useFetch";

const PizzaList = () => {
  const { pizzaOptions } = usePizzaContext();

  return (
    <div className="row">
      {pizzaOptions.map((pizza, index) => (
        <div className="col-md-3">
          <PizzaCard
            key={index}
            image={pizza.img}
            title={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            pizzaId={pizza.id}
          />
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
