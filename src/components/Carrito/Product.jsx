import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="card my-5 text-center">
      <img className="img-carrito responsive" src={product.image} alt={product.name} />
      <h3 className='text-center'>{product.name}</h3>
      <div className='h2 text-center'>${product.price}</div>
      <div  className='text-center'>
        <button onClick={() => onAdd(product)}>Agregar al Carrito</button>
      </div>
    </div>
  );
}
