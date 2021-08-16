import React from "react";
import { useParams } from "react-router-dom";
import "../layout.css";

const Search = () => {
  let { search } = useParams();

  return <div className="tereska">HEJCIA, SZUKASZ "{search}"</div>;
};

export default Search;
