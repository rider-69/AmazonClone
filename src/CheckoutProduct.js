import { ContactPageSharp } from "@mui/icons-material";
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    //remove from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">

     <img className="checkoutProduct__image" src={image} alt="" />
      <div className="chekoutProduct__info">
        <p className="chekoutProduct__title">{title}</p>
        <p className="chekoutProduct__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={RemoveFromBasket}>Remove</button>
      </div>
     </div>
    
  );
}

export default CheckoutProduct;
