import React from "react";
import { useParams } from "react-router-dom";
import "../layout.css";
import { productData } from "../../../api/productData";
import { useState, useEffect } from "react";

const Product = () => {
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
        <div className="tereska">
          <div className="product-container">
            <div className="history-map">
              <p>
                <a href="/">Home</a> {"> "}
                <a href="/">{product.type}</a> {"> "}
                <a href={`/category/${product.model}`}>{product.model}</a>{" "}
                {"> "}
                <a href={`/brand/${product.brand}`}>{product.brand}</a> {"> "}
                <p>{product.name}</p>
              </p>
            </div>
            <div className="img-container">
              <img src={product.imgURL} alt={product.name} />
            </div>
            <div className="product-info">
              <h1 className="brand">{product.brand}</h1>
              <h3 className="name">{product.name}</h3>
              <p className="price-text">Price:</p>
              <h4 className="price">{product.price}</h4>
              <p>FREE EXPRESS SHIPPING WORLDWIDE</p>

              <h4 className="options">Options:</h4>
              {product.options.map((option, idx) => {
                const { color } = option;

                return (
                  <li
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
              <select
                name="size"
                id="size"
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
                        {sizeName == selectedSize ? "Selected size: " : ""}
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
      )}

      {product === undefined && (
        <div className="tereska">SPIERDALAJ, bo {productName} nie istnieje</div>
      )}
    </>
  );
};

export default Product;
