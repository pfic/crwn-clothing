import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemsInCart }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsInCart}</span>
  </div>
);

const mapStateToProps = state => ({
  itemsInCart: 0,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
