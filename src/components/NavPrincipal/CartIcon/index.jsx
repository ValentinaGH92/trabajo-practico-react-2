import "./cartIcon.css";
import { Image } from "react-bootstrap";
import CartIconSvg from "../../../svg/cart.svg";
import { usePizzaContext } from "../../../context/pizzaContext";
import { getTotalPrice } from "../../../utils/priceFormater";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { cart } = usePizzaContext();
  const navigate = useNavigate();
  const count = cart.length || 0;

  const total = getTotalPrice(cart);

  const handlerRedirectToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <span>$ {total}</span>
      <span className="count">{count}</span>
      <Image src={CartIconSvg} width="30" onClick={handlerRedirectToCart} />
    </>
  );
};

export default CartIcon;
