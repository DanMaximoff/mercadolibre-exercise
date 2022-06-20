import { useState, useEffect } from "react";
import {ProductListItem} from '../ProductListItem/ProductListItem';
import NotFound from '../NotFound';
import * as API from "../../services/products";
import { useSearchParams } from "react-router-dom";


export function ProductList() {
  const [products, setProducts] = useState();

  const [searchParam] = useSearchParams();
  const id = searchParam.get("q")

  useEffect(() => {
    API.getProducts(id).then(setProducts).catch(console.log);
  }, []);

  return (
    <>
    {!products ? (
      <div className="loading">Loading...</div>
    ) : (
      <section className="item-results">
        {products.results.map(product => (
          <ProductListItem key={product.id}  {...product} />
        ))}
        <hr></hr>
        {(products.results.length === 0) && <NotFound />}
      </section>
    )}
    </>
  );
}
