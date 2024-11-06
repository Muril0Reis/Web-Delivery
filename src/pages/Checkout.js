import { useState } from "react";
import { Link } from "react-router-dom";

import { address } from "../constants";

import { BiHomeHeart } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaPix } from "react-icons/fa6";

const Checkout = () => {
  const [userAddress, setUserAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <div className="container checkout">
      <p className="heading-text">Checkout</p>
      <div className="address-container">
        <p className="subheading-text">Selecione seu endereço</p>
        <div className="all-address">
          {address.map((address, index) => (
            <div
              key={index}
              className={
                userAddress.id === address.id
                  ? "address checkout-selected"
                  : "address"
              }
              onClick={() => setUserAddress(address)}
            >
              {" "}
              <p>
                {address.AddressType === "Home" ? (
                  <BiHomeHeart size="1.5rem" />
                ) : (
                  <HiOfficeBuilding size="1.5rem" />
                )}
              </p>
              <p>{address.Name}</p>
              <p>{address.Mobile}</p>
              <p>{address.Address}</p>
            </div>
          ))}
        </div>
        {userAddress && (
          <div className="payment mtop20">
            <p className="subheading-text">Qual o método de pagamento?</p>
            <div className="payment-method">
              <button
                className={
                  paymentMethod === "COD"
                    ? "payment-option checkout-selected"
                    : "payment-option"
                }
                onClick={() => setPaymentMethod("COD")}
              >
                {" "}
                <FaPix color="green" /> PIX{" "}
              </button>
              <button
                className={
                  paymentMethod === "Credit Card"
                    ? "payment-option checkout-selected"
                    : "payment-option"
                }
                onClick={() => setPaymentMethod("Credit Card")}
              >
                {" "}
                <BsFillCreditCardFill color="green" /> Cartão de crédito{" "}
              </button>
            </div>
          </div>
        )}
      </div>
      {userAddress && paymentMethod && (
        <Link to="/order-summary" className="place-order mtop20">
          Fazer pedido
        </Link>
      )}
    </div>
  );
};

export default Checkout;
