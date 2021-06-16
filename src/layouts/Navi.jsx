import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" name="Ana Sayfa" />
          <Menu.Item as={NavLink} to="/products" name="Ürünler" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
