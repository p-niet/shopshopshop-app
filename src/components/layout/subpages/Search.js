import React from "react";
import { useParams, Link } from "react-router-dom";
import { productData } from "../../../api/productData";
import { useState } from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";

const Search = ({ lang }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  let { search } = useParams();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const searchItem = search.toLowerCase();

  function setFinalArray() {
    const newVal = productData.filter(
      (el) =>
        el.brand.toLowerCase().includes(searchItem.toLowerCase()) ||
        el.model.toLowerCase().includes(searchItem.toLowerCase()) ||
        el.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setItems(newVal);
    return;
  }

  useEffect(() => {
    setFinalArray();
  }, []);

  const numberOfPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="categoryName">
        <h1 className="category-name">You're searching for: {searchItem}</h1>
      </div>
      <div className="product-grid">
        {currentItems.map((products) => {
          const { id, name, brand, model, category, imgURL, price } = products;

          return (
            <article className="product-box" key={id}>
              <Link
                to={`/${lang.isoCode}/product/${id}/${name}`}
                className="link"
              >
                <div className="singlebox">
                  <img src={imgURL[0]} alt={name} />
                  <h5>{brand}</h5>
                  <h5 className="productName">{name}</h5>
                  <h5>
                    {model} {">"} {category}
                  </h5>

                  <h5 className="singleprice">{price}</h5>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      {numberOfPages !== 1 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default Search;
