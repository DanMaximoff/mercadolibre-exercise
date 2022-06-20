import React from 'react';
import { Link } from 'react-router-dom';
import shipping from '../../assets/ic_shipping.png';

export function ProductListItem(product) {

  return (
    <>
      <Link to={`/items/${product.id}`}>
        <section className="results-item">
          <section className="results-item__thumbnail">
            <img className="img" src={product.thumbnail} alt="" />
          </section>
          <section className="results-item__info">
            <h1 className="results-item__price">
                $
              {product.price}
              {product.free_shipping ? <img src={shipping} alt=""/> : ''}
            </h1>

            <p className="results-item__location">
              {product.address.city_name}
            </p>
            <h2 className="results-item__title">{product.title}</h2>
          </section>
        </section>
      </Link>
      <hr />
      
    </>
  );
  
}
