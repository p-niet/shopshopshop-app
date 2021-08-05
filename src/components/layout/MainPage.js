import React from "react";
import babskie from "./img/babskie.png";
import chlopskie from "./img/chlopskie.png";
import casual from "./img/casual.jpg";
import ugly from "./img/ugly.jpg";

const MainPage = () => {
  return (
    <div className="categories-container">
      <div className="babskie">
        <img src={babskie} alt="babskie" />
        <h4>babskie</h4>
      </div>
      <div className="double-vert">
        <div className="casual">
          <img src={casual} alt="casua" />
          <h4>casual looks</h4>
        </div>
        <div className="foruglies">
          <img src={ugly} alt="For uglies" />
          <h4>for ugly people</h4>
        </div>
      </div>
      <div className="chlopskie">
        <img src={chlopskie} alt="chłopskie" />
        <h4>chłopskie</h4>
      </div>
    </div>
  );
};

export default MainPage;
