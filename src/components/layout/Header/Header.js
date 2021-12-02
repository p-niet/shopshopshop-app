import React, { useState } from "react";
import { menuData } from "../../../api/menuData";
import { ThirdHeaderLayer } from "./ThirdHeaderLayer";
import MobileHeader from "./MobileHeader";
import "./header.css";
import { useHistory } from "react-router-dom";
import LanguagePicker from "./LanguagePicker";
import { useCookies } from "react-cookie";
import LogIn from "./LogIn";
import { productData } from "../../../api/productData";

const Header = ({ lang }) => {
  let history = useHistory();

  const [topLevelCategorySelected, setTopLevelCategorySelected] = useState(0);
  const [secondLevelCategorySelected, setSecondCategorySelected] = useState(0);
  const [isThirdLevelDisplayed, setIsThirdLevelDisplayed] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [input, setInput] = useState("");
  const [isLanguageShown, setIsLanguageShown] = useState(false);
  const [isLoginShown, setIsLoginShow] = useState(false);
  const [name, setName] = useState(undefined);

  const topLevelCategoryData = menuData[topLevelCategorySelected];
  const secondLevelCategoryData =
    menuData[topLevelCategorySelected].children[secondLevelCategorySelected];

  const thirdLevelCategoryDataLeft = secondLevelCategoryData.left.children;
  const thirdLevelCategoryDataMiddle = secondLevelCategoryData.middle.children;
  const thirdLevelCategoryDataRight = secondLevelCategoryData.right;
  const [cookies] = useCookies();

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
          lang={lang}
          isLanguageShown={isLanguageShown}
          setIsLanguageShown={setIsLanguageShown}
          name={name}
          setName={setName}
          isLoginShown={isLoginShown}
          setIsLoginShow={setIsLoginShow}
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
            <h1>
              <a href="/">SHOPSHOPSHOP</a>
            </h1>
            <div className="options">
              <ul>
                <li
                  onClick={() => {
                    setIsLanguageShown(true);
                  }}
                >
                  Language: {lang.name}
                </li>
                {!name && (
                  <li
                    onClick={() => {
                      setIsLoginShow(true);
                    }}
                  >
                    Sign in / Sing up
                  </li>
                )}
                {name !== undefined && (
                  <li>
                    {name} / <span>Log Out</span>
                  </li>
                )}
                {isLoginShown === true && (
                  <LogIn
                    setIsLoginShow={setIsLoginShow}
                    lang={lang}
                    setName={setName}
                  />
                )}
              </ul>
            </div>
            {isLanguageShown && (
              <div
                className="lang-picker"
                onClick={() => {
                  setIsLanguageShown(false);
                }}
              >
                <LanguagePicker />
              </div>
            )}
          </div>
          <div className="mid">
            <div className="categories">
              <ul>
                {menuData.map((topLevelCategory, idx) => {
                  const { name } = topLevelCategory;

                  return (
                    <li key={idx}>
                      <a
                        href={`/${cookies.Language}/${name}`}
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                placeholder="Search..."
                className="search"
                type="search"
                name="search"
                id="search"
                value={input}
                onInput={(e) => setInput(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    history.push(`/${lang.isoCode}/search/${input}`);
                  }
                }}
              />
            </form>
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
