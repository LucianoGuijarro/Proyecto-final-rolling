import React from "react";

export default function Header(props) {
  return (
    <header className="container-fluid m-5">
      <div>
        <a href="#/cart">
          Carrito{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin"> Registrarse</a>
      </div>
    </header>
  );
}
