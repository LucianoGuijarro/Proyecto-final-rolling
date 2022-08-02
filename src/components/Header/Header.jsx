import React from "react";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Carrito</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrito{""}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">Ingresar</a>
      </div>
    </header>
  );
}
