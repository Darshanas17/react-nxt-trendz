import React, { Component } from "react";
import CartContext from "../../context/CartContext";
import { Redirect } from "react-router-dom"; // Import Redirect from React Router
import "./index.css";

class CartSummary extends Component {
  state = {
    redirectToComingSoon: false, // State to trigger the redirect
  };

  onClickUnderDevelopment = () => {
    this.setState({ redirectToComingSoon: true }); // Trigger redirect when button is clicked
  };

  render() {
    const { redirectToComingSoon } = this.state;

    if (redirectToComingSoon) {
      return <Redirect to="/coming-soon" />; // Redirect when state is true
    }

    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          let total = 0;
          cartList.forEach((eachCartItem) => {
            total += eachCartItem.price * eachCartItem.quantity;
          });

          return (
            <>
              <div className="cart-summary-container">
                <h1 className="order-total-value">
                  <span className="order-total-label">Order Total:</span> Rs{" "}
                  {total} /-
                </h1>
                <p className="total-items">{cartList.length} Items in cart</p>
                <button
                  type="button"
                  className="checkout-button d-sm-none"
                  onClick={this.onClickUnderDevelopment}
                >
                  Checkout
                </button>
              </div>
              <button
                type="button"
                className="checkout-button d-lg-none"
                onClick={this.onClickUnderDevelopment}
              >
                Checkout
              </button>
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartSummary;
