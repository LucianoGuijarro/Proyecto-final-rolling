import React from 'react';
import Product from '../Producto/Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block">
      <h2>Mas juegos para vos!</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
