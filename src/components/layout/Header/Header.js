import React, { useState } from "react";
import { menuData } from "../../../api/menuData";
import { ThirdHeaderLayer } from "./ThirdHeaderLayer";
import MobileHeader from "./MobileHeader";
import "./header.css";

const Header = () => {
  const [topLevelCategorySelected, setTopLevelCategorySelected] = useState(0);
  const [secondLevelCategorySelected, setSecondCategorySelected] = useState(0);
  const [isThirdLevelDisplayed, setIsThirdLevelDisplayed] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const topLevelCategoryData = menuData[topLevelCategorySelected];
  const secondLevelCategoryData =
    menuData[topLevelCategorySelected].children[secondLevelCategorySelected];

  const thirdLevelCategoryDataLeft = secondLevelCategoryData.left.children;
  const thirdLevelCategoryDataMiddle = secondLevelCategoryData.middle.children;
  const thirdLevelCategoryDataRight = secondLevelCategoryData.right;

  return (
    <>
      {isMobileMenuVisible && (
        <MobileHeader
          topLevelCategorySelected={topLevelCategorySelected}
          secondLevelCategoryData={secondLevelCategoryData}
          thirdLevelCategoryDataLeft={thirdLevelCategoryDataLeft}
          thirdLevelCategoryDataMiddle={thirdLevelCategoryDataMiddle}
          setTopLevelCategorySelected={setTopLevelCategorySelected}
          setSecondCategorySelected={setSecondCategorySelected}
          setIsThirdLevelDisplayed={setIsThirdLevelDisplayed}
          isThirdLevelDisplayed={isThirdLevelDisplayed}
          isMobileMenuVisible={isMobileMenuVisible}
          setIsMobileMenuVisible={setIsMobileMenuVisible}
        />
      )}

      <nav className="header">
        <div className="header-content">
          <div className="top">
            <img
              src="https://d3nn9jcidi1lkh.cloudfront.net/mkt/header_mobile/hamburger.svg"
              alt="mobile-menu"
              id="mobile-menu"
              onClick={() => {
                setIsMobileMenuVisible(true);
              }}
            ></img>
            <p>Subscribe</p>
            <h1>SHOPSHOPSHOP</h1>
            <div className="options">
              <ul>
                <li>Language</li>
                <li>Sign in / Sing up</li>
              </ul>
            </div>
          </div>
          <div className="mid">
            <div className="categories">
              <ul>
                {menuData.map((topLevelCategory, idx) => {
                  const { name } = topLevelCategory;

                  return (
                    <li key={idx}>
                      <a
                        href={`/${name}`}
                        onMouseEnter={() => {
                          setTopLevelCategorySelected(idx);
                        }}
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <input type="text" placeholder="Search..." className="search" />
          </div>
          <div
            className="btm"
            onMouseLeave={() => {
              setIsThirdLevelDisplayed(false);
            }}
          >
            <ul>
              {topLevelCategoryData.children.map((secondLevelCategory, idx) => {
                const { name } = secondLevelCategory;

                return (
                  <li
                    onMouseEnter={() => {
                      setSecondCategorySelected(idx);
                      setIsThirdLevelDisplayed(true);
                    }}
                    key={idx}
                  >
                    <span className="megamenu-trigger">
                      <p>{name}</p>
                    </span>
                  </li>
                );
              })}
            </ul>

            {isThirdLevelDisplayed && (
              <ThirdHeaderLayer
                secondLevelCategoryData={secondLevelCategoryData}
                thirdLevelCategoryDataLeft={thirdLevelCategoryDataLeft}
                thirdLevelCategoryDataMiddle={thirdLevelCategoryDataMiddle}
                thirdLevelCategoryDataRight={thirdLevelCategoryDataRight}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
