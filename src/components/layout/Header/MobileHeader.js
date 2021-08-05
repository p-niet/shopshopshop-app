import React from "react";
import { menuData } from "../../../api/menuData.js";
import "./header.css";

const MobileHeader = ({
  topLevelCategorySelected,
  secondLevelCategoryData,
  thirdLevelCategoryDataLeft,
  thirdLevelCategoryDataMiddle,
  setTopLevelCategorySelected,
  setSecondCategorySelected,
  setIsThirdLevelDisplayed,
  isThirdLevelDisplayed,
}) => {
  const topLevelCategoryData = menuData[topLevelCategorySelected];

  return (
    <>
      <div className="background-blur"></div>
      <nav className="mobile-header">
        <div className="main-categories">
          {menuData.map((topLevelCategory, idx) => {
            const { name } = topLevelCategory;

            return (
              <p
                key={idx}
                onClick={() => {
                  setTopLevelCategorySelected(idx);
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
              <button className="sign-in">sign in</button>
              <button className="sign-up">sign up</button>
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
            <h3>{secondLevelCategoryData.left.name}</h3>
            {thirdLevelCategoryDataLeft.map((thirdCategory, idx) => {
              const { name, links } = thirdCategory;

              return (
                <p key={idx} href={links}>
                  {name}
                </p>
              );
            })}

            <h3>{secondLevelCategoryData.middle.name}</h3>
            {thirdLevelCategoryDataMiddle.map((text, href) => {
              const { name } = text;
              const { links } = href;

              return (
                <p key={name} href={links}>
                  {name}
                </p>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default MobileHeader;
