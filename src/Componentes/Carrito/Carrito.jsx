import React from "react";

function carrito() {
  return (
    <div className="container-carrito">
      <div className="row">
        {/* <!-- Elementos generados a partir del JSON --> */}
        <main className="carrito-items" id="items"></main>
        {/* <!-- Carrito --> */}
        <div>
          <h2 className="title-carrito">Carrito</h2>
          {/* <!-- Elementos del carrito --> */}
          <ul id="carrito" className="list-group"></ul>

          {/* <!-- Precio total --> */}
          <p className="total-carrito">
            Total: <span id="total"></span>$
          </p>
          <button id="boton-vaciar" className="btn-carrito">
            Vaciar
          </button>
        </div>
      </div>
    </div>
  );
}

export default carrito;
