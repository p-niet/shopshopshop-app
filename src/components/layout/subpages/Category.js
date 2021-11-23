import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../layout.css";
import { productData } from "../../../api/productData";
import Pagination from "./Pagination";

const Category = ({ lang }) => {
  let { category } = useParams();

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const selectedModel = category;

  function setFinalArray() {
    setItems([...productData.filter((el) => el.model === selectedModel)]);
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
        <h1 className="category-name">Category: {category}</h1>
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
            model === selectedModel && (
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
};

export default Category;
