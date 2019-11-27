import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
import CartItem from "./../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
// import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {  CartActionTypes } from "../../redux/cart/cart.types";
const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//Other way to dispatch props. Found on google.
const mapDispatchToProps = {
  toggleCartHidden: () => ({ type: CartActionTypes.TOGGLE_CART_HIDDEN }),
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
