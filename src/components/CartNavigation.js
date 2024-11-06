import React from "react";
import { useSelector } from "react-redux";
import { getCartTotal } from "../utils/totalPrice";
import { Link } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";

const CartNavigation = () => {
  const cartCount = useSelector((store) => store.cart.totalItemsCount);
  const cartItems = useSelector((store) => store.cart.items);

  const totalAmount = getCartTotal(cartItems);
  return (
    <div className="cart-navigation">
      <p>
        {cartCount} Item | R$ {totalAmount/10}
      </p>

      <Link to="/cart">
        <div className="cart-navigation__link">
          {" "}
          Ver carrinho
          <BsHandbagFill size="1.25rem" />
        </div>
      </Link>
    </div>
  );
};

export default CartNavigation;
