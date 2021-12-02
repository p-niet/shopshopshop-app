import React from "react";
import { menuData } from "../../../api/menuData.js";
import "./header.css";
import LanguagePicker from "./LanguagePicker.js";
import LogIn from "./LogIn.js";
import { Link, useHistory } from "react-router-dom";

const MobileHeader = ({
  topLevelCategorySelected,
  secondLevelCategoryData,
  thirdLevelCategoryDataLeft,
  thirdLevelCategoryDataMiddle,
  setTopLevelCategorySelected,
  setSecondCategorySelected,
  setIsThirdLevelDisplayed,
  isThirdLevelDisplayed,
  isMobileMenuVisible,
  setIsMobileMenuVisible,
  lang,
  setIsLanguageShown,
  isLanguageShown,
  name,
  setName,
  isLoginShown,
  setIsLoginShow,
  setType,
  typedProducts,
  secondLevelCategorySelected,
}) => {
  let history = useHistory();

  const topLevelCategoryData = menuData[topLevelCategorySelected];

  const designersMapped = typedProducts.map((obj, idx) => obj.brand);
  const designers = designersMapped.filter(
    (brand, idx) => designersMapped.indexOf(brand) === idx
  );

  const clothingMapped = typedProducts.map((obj, idx) => obj.model);
  const clothing = clothingMapped.filter(
    (model, idx) => clothingMapped.indexOf(model) === idx
  );

  const topDesigners = {};
  designersMapped.forEach(
    (brand) => (topDesigners[brand] = (topDesigners[brand] || 0) + 1)
  );

  const sortedDesigners = Object.keys(topDesigners).sort(
    (a, b) => topDesigners[b] - topDesigners[a]
  );
  sortedDesigners.length = 5;

  return (
    <>
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

      {isLoginShown === true && (
        <LogIn setIsLoginShow={setIsLoginShow} lang={lang} setName={setName} />
      )}
      <div
        className="background-blur"
        onClick={() => {
          setIsMobileMenuVisible(false);
        }}
      ></div>
      <nav className="mobile-header">
        <div className="main-categories">
          {menuData.map((topLevelCategory, idx) => {
            const { name } = topLevelCategory;

            return (
              <p
                key={idx}
                onClick={() => {
                  setTopLevelCategorySelected(idx);
                  setType(name);
                }}
              >
                {name}
              </p>
            );
          })}
        </div>
        {!isThirdLevelDisplayed && (
          <>
            <div className="secondary-categories">
              <ul>
                {topLevelCategoryData.children.map(
                  (secondLevelCategory, idx) => {
                    const { name } = secondLevelCategory;

                    return (
                      <li
                        onClick={() => {
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
                  }
                )}
              </ul>
            </div>
            <div className="buttons-container">
              <button
                className="sign-in"
                onClick={() => {
                  setIsLoginShow(true);
                }}
              >
                {!name && "Log in"}
                {name != undefined && `Logged in: ${name}`}
              </button>

              <button
                className="sign-up"
                onClick={() => {
                  setIsLanguageShown(true);
                }}
              >
                {!lang && "Language"}
                {lang && `Language: ${lang.name}`}
              </button>
            </div>
          </>
        )}
        {isThirdLevelDisplayed && (
          <div className="third-categories">
            <h3
              onClick={() => {
                setIsThirdLevelDisplayed(false);
              }}
            >
              &lt; back
            </h3>
            {secondLevelCategorySelected === 0 && (
              <>
                <h3>Designers</h3>
                {designers.map((obj, idx) => {
                  return (
                    <p
                      key={idx}
                      onClick={() =>
                        history.push(`/${lang.isoCode}/brand/${obj}`)
                      }
                    >
                      {obj}
                    </p>
                  );
                })}{" "}
              </>
            )}

            {secondLevelCategorySelected === 1 && (
              <>
                <h3>Clothing</h3>
                {clothing.map((obj, idx) => {
                  return (
                    <Link to={`/${lang.isoCode}/brand/${obj}`} id="link">
                      <p key={idx}>{obj}</p>
                    </Link>
                  );
                })}{" "}
              </>
            )}

            <h3>{secondLevelCategoryData.middle.name}</h3>
            {sortedDesigners.map((obj, idx) => {
              return (
                <Link to={`/${lang.isoCode}/brand/${obj}`} id="link">
                  <p key={idx}>{obj}</p>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default MobileHeader;
