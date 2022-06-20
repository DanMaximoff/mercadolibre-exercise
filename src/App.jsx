import { Routes, Route } from "react-router-dom";
import { ProductList } from './components/ProductList/ProductList';
import {SearchBox} from './components/SearchBox/SearchBox';
import {NotFoundPage} from './components/NoPage/NotFoundPage';
import { ProductDetails } from "./components/ProductDetails/ProductDetails";



export function App() {
  return (
    <>
    <SearchBox />
    <section className="meli-centered">
        <Routes>
          <Route path="/items" element={<ProductList />} />
          <Route path="/items/:product" element={<ProductDetails />} />
          <Route path="/" element={<SearchBox />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </section>
    </>
  );
}
