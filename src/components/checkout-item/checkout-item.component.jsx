import React, { Component } from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {} from "../../redux/cart/cart.actions";
import {} from "module";

//video did this as a functional component
export class CheckoutItem extends Component {
  render() {
    return (
      <div className="checkout-item">
        <div className="image-container">
          <img
            src={this.props.cartItem.imageUrl}
            alt="item"
            className="image"
          />
        </div>
        <span className="name">{this.props.cartItem.name}</span>
        <span className="quantity">{this.props.cartItem.quantity}</span>
        <span className="price">{this.props.cartItem.price}</span>
        <div className="remove-button">&#10005;</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutItem);
