import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.5;
  // Envio gratis a partir de $10000
  const shippingPrice = itemsPrice > 10000 ? 0 : 2500;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="block">
      <h2 className="h2 text-center my-5">Tu Carrito</h2>
      <div>
        {cartItems.length === 0 && (
          <div className="h2 text-center my-5">Carrito Vacio</div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className=" h2 row text-center">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right h2">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row my-5">
              <div className="col-2 h2">Precio</div>
              <div className="col-1 text-right h2">
                ${itemsPrice.toFixed(2)}
              </div>
            </div>
            <div className="row my-5">
              <div className="col-2 h2">Impuestos</div>
              <div className="col-1 text-right h2">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row my-5">
              <div className="col-2 h2">Envío</div>
              <div className="col-1 text-right h2">${shippingPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2 h1">
                <strong>Total</strong>
              </div>
              <div className="text-right h1 col-1">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="button text-center">
              <button onClick={() => alert("Gracias por su compra!")}>
                COMPRAR
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
