import React from "react";
import "./mainpage.css";
import { productData } from "../../api/productData";
import { Link, useRouteMatch } from "react-router-dom";

const babskie = productData[1].imgURL[0];
const accesories = productData[2].imgURL[0];
const kids = productData[6].imgURL[0];
const chlopskie = productData[66].imgURL[0];

const MainPage = ({ lang }) => {
  let { path } = useRouteMatch();

  return (
    <div className="categories-container">
      <div className="babskie" id="zoom-in">
        <Link to={`/${lang.isoCode}/Women`}>
          <figure>
            <img src={babskie} alt="babskie" />
            <h4>babskie</h4>
          </figure>
        </Link>
      </div>
      <div className="casual" id="zoom-in">
        <Link to={`/${lang.isoCode}/category/Accesories`}>
          <figure>
            <img src={accesories} alt="accesories" />
            <h4>accesories</h4>
          </figure>
        </Link>
      </div>
      <div className="foruglies" id="zoom-in">
        <Link to={`/${lang.isoCode}/Kids`}>
          <figure>
            <img src={kids} alt="kids" />
            <h4>for kids</h4>
          </figure>
        </Link>
      </div>
      <div className="chlopskie" id="zoom-in">
        <Link to={`/${lang.isoCode}/Men`}>
          <figure>
            <img src={chlopskie} alt="chłopskie" />
            <h4>chłopskie</h4>
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
