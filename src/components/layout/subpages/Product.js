import React from "react";
import { useParams, Link } from "react-router-dom";
import "./product.css";
import { productData } from "../../../api/productData";
import { useState, useEffect } from "react";

const Product = ({ lang }) => {
  const [idxOfColor, setIdxOfColor] = useState(0);
  const [bigpic, setBigpic] = useState(false);
  const [keydown, setKeydown] = useState(false);

  const { productId, productName } = useParams();

  function findId(idx) {
    return idx.id === Number(productId);
  }

  const product = productData.find(findId);

  const [color, setColor] = useState(product.options[0].color);

  const currentColorSizes = product.options[idxOfColor].sizes;
  const currentColorSizesNames = Object.keys(currentColorSizes);
  const [selectedSize, setSelectedSize] = useState(
    currentColorSizesNames.length > 0 ? currentColorSizesNames[0] : null
  );
  const [picIndex, setPicIndex] = useState(0);

  const numberOfPics = product.imgURL.length - 1;

  useEffect(() => {
    function listener(e) {
      if (e.key === "ArrowRight" && picIndex < numberOfPics) {
        setPicIndex(picIndex + 1);
      }

      if (e.key === "ArrowLeft" && picIndex > 0) {
        setPicIndex(picIndex - 1);
      }

      if ((e.key === "Escape") & (bigpic !== false)) {
        setBigpic(false);
      }

      setKeydown(true);
    }

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
      setKeydown(false);
    };
  }, [keydown]);

  return (
    <>
      {product !== undefined && (
        <div className="product-container">
          <div className="product-content">
            <div className="history-map">
              <p className="product-history">
                <Link to="/" id="history-link">
                  <p>Home</p>
                </Link>{" "}
                {"> "}
                <Link to={`${lang}/${product.type}`} id="history-link">
                  {product.type}
                </Link>{" "}
                {"> "}
                <Link
                  to={`${lang}/category/${product.model}`}
                  id="history-link"
                >
                  {product.model}
                </Link>{" "}
                {"> "}
                <Link to={`${lang}/brand/${product.brand}`} id="history-link">
                  {product.brand}
                </Link>{" "}
                {"> "} <p>{product.name}</p>
              </p>
            </div>
            <div className="product-main">
              <div className="img-container">
                <div className="secondary-pics">
                  {product.imgURL.map((pic, idx) => {
                    return (
                      <img
                        src={pic}
                        key={idx}
                        alt=""
                        onClick={() => {
                          setPicIndex(idx);
                        }}
                      />
                    );
                  })}
                </div>
                <div className="zoom-in">
                  <figure>
                    <img
                      src={product.imgURL[picIndex]}
                      alt={product.name}
                      onClick={() => {
                        setBigpic(true);
                      }}
                    />
                  </figure>
                </div>
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

      {bigpic !== false && (
        <>
          <div
            className="bigpic-background"
            onClick={() => {
              setBigpic(false);
            }}
          ></div>
          <div className="bigpic-fullscreen">
            <div className="bigpic-pic">
              <img src={product.imgURL[picIndex]} alt="bigpic" />
            </div>
            <div className="bigpic-gallery">
              {product.imgURL.map((pic, idx) => {
                return (
                  <img
                    src={pic}
                    key={idx}
                    alt=""
                    onClick={() => setPicIndex(idx)}
                  />
                );
              })}
            </div>{" "}
          </div>
        </>
      )}

      {product === undefined && (
        <div className="tereska">{productName} is unavailable.</div>
      )}
    </>
  );
};

export default Product;
