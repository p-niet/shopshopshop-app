import React from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { productData } from "../../../api/productData";
import { useState, useEffect } from "react";

const Product = ({ lang }) => {
  const [color, setColor] = useState();
  const [idxOfColor, setIdxOfColor] = useState(0);

  const { productId, productName } = useParams();

  function findId(idx) {
    return idx.id === Number(productId);
  }

  const product = productData.find(findId);
  const currentColorSizes = product.options[idxOfColor].sizes;
  const currentColorSizesNames = Object.keys(currentColorSizes);
  const [selectedSize, setSelectedSize] = useState(
    currentColorSizesNames.length > 0 ? currentColorSizesNames[0] : null
  );

  useEffect(() => {
    setColor(product.options[0].color);
  }, []);

  return (
    <>
      {product !== undefined && (
        <div className="product-container">
          <div className="product-content">
            <div className="history-map">
              <p className="product-history">
                <a href="/">Home</a> {"> "}
                <a href={`${lang}`}>{product.type}</a> {"> "}
                <a href={`${lang}/category/${product.model}`}>
                  {product.model}
                </a>{" "}
                {"> "}
                <a href={`${lang}/brand/${product.brand}`}>
                  {product.brand}
                </a>{" "}
                {"> "} <p>{product.name}</p>
              </p>
            </div>
            <div className="product-main">
              <div className="img-container">
                <img src={product.imgURL} alt={product.name} />
              </div>
              <div className="product-info">
                <h1 className="brand">{product.brand}</h1>
                <h3 className="name">{product.name}</h3>
                <h4 className="product-categories">{product.model}</h4>
                <p className="price-text">Price:</p>
                <h4 className="price">{product.price}</h4>
                <p className="additional-info">
                  FREE EXPRESS SHIPPING WORLDWIDE
                </p>
                <h4 className="options">Options:</h4>
                <div className="option-box">
                  <div className="btn-box">
                    {product.options.map((option, idx) => {
                      const { color } = option;

                      return (
                        <li
                          className="option-btn"
                          key={idx}
                          onClick={() => {
                            setColor(color);
                            setIdxOfColor(idx);
                          }}
                        >
                          {color}
                        </li>
                      );
                    })}
                  </div>{" "}
                  <div className="select-box">
                    <select
                      name="size"
                      id="size"
                      className="sizepicker"
                      onChange={(event) => {
                        const newValue = event.target.value;
                        setSelectedSize(newValue);
                      }}
                      value={selectedSize}
                    >
                      {Object.entries(currentColorSizes).map(
                        ([sizeName, sizeObj]) => {
                          return (
                            <option value={sizeName}>
                              {sizeName === selectedSize
                                ? "Selected size: "
                                : ""}
                              {sizeName}
                              {selectedSize !== undefined &&
                                sizeObj.avaliableItems < 5 &&
                                `Only ${sizeObj.avaliableItems} items left!`}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {product === undefined && (
        <div className="tereska">SPIERDALAJ, bo {productName} nie istnieje</div>
      )}
    </>
  );
};

export default Product;
