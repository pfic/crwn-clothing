import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  addItem,
  removeItem,
  clearItemFromCart
} from "../../redux/cart/cart.actions";

//video did this as a functional component
const CheckoutItem = props => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.cartItem.imageUrl} alt="item" className="image" />
      </div>
      <span className="name">{props.cartItem.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => props.removeItemFromCart(props.cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{props.cartItem.quantity}</span>
        <div
          className="arrow"
          onClick={() => props.addItemToCart(props.cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{props.cartItem.price}</span>
      <div
        onClick={() => props.clearItemFromCart(props.cartItem)}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItem(item)),
  removeItemFromCart: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
