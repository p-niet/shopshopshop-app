import React from "react";
import { useParams } from "react-router-dom";
import "../layout.css";

const Product = () => {
  let { id } = useParams();

  return <div className="tereska">HEJCIA, TU "{id}"</div>;
};

export default Product;
