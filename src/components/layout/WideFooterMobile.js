import React, { useState } from "react";

const WideFooterMobile = () => {
  const [optionsFirst, setOptionsFirst] = useState(false);
  const [optionsSecond, setOptionsSecond] = useState(false);
  const [optionsThird, setOptionsThird] = useState(false);

  return (
    <div className="footer-mobile">
      <h4
        onClick={() => {
          if (optionsFirst === true) {
            setOptionsFirst(false);
            return;
          }
          setOptionsFirst(true);
          setOptionsSecond(false);
          setOptionsThird(false);
        }}
      >
        shopshopshop
      </h4>
      {optionsFirst && (
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Fusce tristique orci</li>
          <li>Sed et mi et nisl</li>
          <li>Proin luctus</li>
          <li>Fusce ut turpis</li>
          <li>In pulvinar dui vitae</li>
          <li>Duis eget libero</li>
        </ul>
      )}
      <h4
        onClick={() => {
          if (optionsSecond === true) {
            setOptionsSecond(false);
            return;
          }
          setOptionsFirst(false);
          setOptionsSecond(true);
          setOptionsThird(false);
        }}
      >
        customer service
      </h4>
      {optionsSecond && (
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Fusce tristique orci</li>
          <li>Sed et mi et nisl</li>
          <li>Proin luctus</li>
          <li>Fusce ut turpis</li>
          <li>In pulvinar dui vitae</li>
        </ul>
      )}
      <h4
        onClick={() => {
          if (optionsThird === true) {
            setOptionsThird(false);
            return;
          }
          setOptionsFirst(false);
          setOptionsSecond(false);
          setOptionsThird(true);
        }}
      >
        connect
      </h4>
      {optionsThird && (
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Fusce tristique orci</li>
        </ul>
      )}
      <p>facebook</p>
      <p>instagram</p>
      <p>pinterest</p>
      <p>twitter</p>
    </div>
  );
};

export default WideFooterMobile;
