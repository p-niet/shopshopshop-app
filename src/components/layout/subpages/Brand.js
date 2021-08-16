import React from "react";
import { useParams } from "react-router-dom";
import "../layout.css";

const Brand = () => {
  let { brand } = useParams();

  return <div className="tereska">HEJCIA, TU BRAND "{brand}"</div>;
};

export default Brand;
