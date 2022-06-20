import React from 'react';
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import * as API from "../../services/products";



export function ProductDetails() {
  const [productDetails, setProductDetails] = useState();
  
  const { product } = useParams();

  useEffect(() => {
    API.getProductsById(product).then(setProductDetails).catch(console.log);
  }, []);

  const numberFormat = (value) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(value);
  
  return (
    <>
      {!productDetails ? (
        <div className="loading">Loading...</div>
      ) : (
      <section style={{backgroundColor: "white"}}>
        <div className="body-content">
          <section className="product-body">
            <div className="product-image">
              <img
                src={productDetails.product.pictures[0].secure_url}
                alt="Imagen del Producto"
              />
            </div>
            <div className="product-resume">
              <div>
                <small className="product-usage">
                  {productDetails.product.condition === 'new'
                    ? 'Nuevo'
                    : 'Usado'}
                  <span>&nbsp;-&nbsp;</span>
                  {productDetails.product.sold_quantity}
                  {' '}
                  vendidos
                </small>
              </div>
              <p className="product-title">
                {productDetails.product.title}
              </p>
              <h2 className="product-resume__h2">
                <span>{numberFormat(productDetails.product.price)}</span>
              </h2>
              <button type="button" className="product-resume__button">
                  Comprar
              </button>
            </div>
          </section>
        </div>
        <div>


          <div className="product-description">
            <h3 className="description__h3">Descripción del producto</h3>
            <p className="description__p">
              {productDetails.description.plain_text}
            </p>
          </div>
        </div>
      </section>
      )}
    </>
  )
}
