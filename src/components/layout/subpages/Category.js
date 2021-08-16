import React from "react";
import { useParams } from "react-router-dom";
import "../layout.css";

const Category = () => {
  let { category } = useParams();

  return <div className="tereska">HEJCIA, TU KATEGORIA "{category}"</div>;
};

export default Category;
