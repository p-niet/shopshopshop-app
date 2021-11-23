import React from "react";
import { useParams, Link } from "react-router-dom";
import { productData } from "../../../api/productData";
import { useState } from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";

function Type({ lang }) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  let { type } = useParams();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const selectedType = type;

  function setFinalArray() {
    setItems([...productData.filter((el) => el.type === selectedType)]);
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
        <h1 className="category-name">Category: {type}</h1>
      </div>
      <div className="product-grid">
        {currentItems.map((products) => {
          const {
            id,
            name,
            type,
            model,
            brand,
            category,
            imgURL,
            price,
          } = products;

          return (
            type === selectedType && (
              <article className="product-box" key={id}>
                <Link
                  to={`/${lang.isoCode}/product/${id}/${name}`}
                  className="link"
                >
                  <div className="singlebox">
                    <img src={imgURL} alt={name} />
                    <h5>{brand}</h5>
                    <h5 className="productName">{name}</h5>
                    <h5>
                      {model} {">"} {category}
                    </h5>

                    <h5 className="singleprice">{price}</h5>
                  </div>
                </Link>
              </article>
            )
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
}

export default Type;
