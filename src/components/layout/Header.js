import React, { useState } from "react";

const menuData = [
  {
    name: "Women",
    children: [
      {
        name: "Designers",
        left: {
          name: "Designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        middle: {
          name: "Featured designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        right: {
          name: "Sale",
          imgSrc:
            "https://www.pride.com/sites/default/files/2019/08/11/rupauls-drag-race-rupauls-best-looks-outfits.jpg",
          text: "Shop now",
          href: "/sale",
        },
      },
      {
        name: "Clothing",
        left: {
          name: "Designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        middle: {
          name: "Featured designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        right: {
          name: "Sale",
          imgSrc:
            "https://www.pride.com/sites/default/files/2019/08/11/rupauls-drag-race-rupauls-best-looks-outfits.jpg",
          text: "Shop now",
          href: "/sale",
        },
      },
    ],
  },
  {
    name: "Men",
    children: [
      {
        name: "Gay Designers",
        left: {
          name: "Amazing Shit",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        middle: {
          name: "Featured designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        right: {
          name: "Sale",
          imgSrc:
            "https://www.pride.com/sites/default/files/2019/08/11/rupauls-drag-race-rupauls-best-looks-outfits.jpg",
          text: "Shop now",
          href: "/sale",
        },
      },
      {
        name: "Clothing",
        left: {
          name: "Designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        middle: {
          name: "Featured designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        right: {
          name: "Sale",
          imgSrc:
            "https://www.pride.com/sites/default/files/2019/08/11/rupauls-drag-race-rupauls-best-looks-outfits.jpg",
          text: "Shop now",
          href: "/sale",
        },
      },
    ],
  },
  {
    name: "Kids",
    children: [
      {
        name: "Designers",
        left: {
          name: "Designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        middle: {
          name: "Featured designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        right: {
          name: "Sale",
          imgSrc:
            "https://www.pride.com/sites/default/files/2019/08/11/rupauls-drag-race-rupauls-best-looks-outfits.jpg",
          text: "Shop now",
          href: "/sale",
        },
      },
      {
        name: "Clothing",
        left: {
          name: "Designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        middle: {
          name: "Featured designers",
          children: [
            { name: "Balenciaga", href: "/brand/Balenciaga/" },
            { name: "Brunello Cucinelli", href: "/brand/Brunello Cucinelli/" },
          ],
        },
        right: {
          name: "Sale",
          imgSrc:
            "https://www.pride.com/sites/default/files/2019/08/11/rupauls-drag-race-rupauls-best-looks-outfits.jpg",
          text: "Shop now",
          href: "/sale",
        },
      },
    ],
  },
];

const Header = () => {
  const [topLevelCategorySelected, setTopLevelCategorySelected] = useState(0);
  const [secondLevelCategorySelected, setSecondCategorySelected] = useState(0);
  const [thirdLevelCategorySelected, setThirdLevelCategorySelected] = useState(
    0
  );

  const topLevelCategoryData = menuData[topLevelCategorySelected];
  const secondLevelCategoryData =
    menuData[topLevelCategorySelected].children[secondLevelCategorySelected];

  return (
    <nav className="header">
      <div className="top">
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
                <li>
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
      <div className="btm">
        <ul>
          {topLevelCategoryData.children.map((secondLevelCategory, idx) => {
            const { name } = secondLevelCategory;

            return (
              <li
                onMouseEnter={() => {
                  setSecondCategorySelected(idx);
                }}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="megamenu">
        <div className="left">{secondLevelCategoryData.left.name}</div>
        <div className="middle">{secondLevelCategoryData.middle.name}</div>
        <div className="right">{secondLevelCategoryData.right.name}</div>
      </div>
    </nav>
  );
};

export default Header;
