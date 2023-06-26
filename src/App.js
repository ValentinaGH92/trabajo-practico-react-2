import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import NavPrincipal from "./components/NavPrincipal";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/AppRoutes";
import { PizzaProvider } from "./context/pizzaContext";

function App() {
  return (
    <PizzaProvider>
      <div className="App">
        <Router>
          <NavPrincipal />
          <AppRoutes />
        </Router>
      </div>
    </PizzaProvider>
  );
}

export default App;
