import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Carrito re piola</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrito{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Registrarse</a>
      </div>
    </header>
  );
}
