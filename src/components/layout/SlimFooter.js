import React from "react";

const SlimFooter = () => {
  return (
    <div className="footer-slim">
      <div className="top">
        <div className="about">
          <h3>what we do</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ornare massa eu quam ultrices iaculis. Aliquam suscipit lectus
            facilisis urna rutrum interdum ut scelerisque magna. Nam ac
            efficitur quam, et viverra tortor. Duis vel libero eleifend, posuere
            nibh semper, vulputate mauris.
          </p>
          <p className="more">
            Suspendisse ut augue blandit neque{" "}
            <a href="!#">consectetur tempus</a>.
          </p>
        </div>
        <div className="reviews">
          <h3>reviews</h3>
          <p>
            Fusce sit amet nisi maximus, condimentum massa eget, euismod urna.
            Sed rutrum odio venenatis metus consequat, at cursus mi fringilla.
            Vivamus sit amet nisl malesuada, dictum justo eget, vestibulum ante.
            <br />
            In nec iaculis turpis.
          </p>
          <p className="more">
            Morbi purus eros, viverra eget molestie sed,{" "}
            <a href="!#">hendrerit quis est</a>.
          </p>
        </div>
      </div>
      <div className="mid">
        <div className="box1">
          <h2>100% authentic</h2>
          <p>
            Morbi diam quam, eleifend et ante non, malesuada elementum ante.
            Cras quis arcu egestas nulla rutrum interdum. Vestibulum interdum
            purus ex, lobortis tristique ante congue mattis.
          </p>
        </div>
        <div className="box2">
          <h2>free express shiping</h2>
          <p>
            In a varius mi. Aenean a lacus tellus. Duis pretium non diam sed
            aliquam. Nunc ac purus porttitor, condimentum dolor eu, cursus
            augue.
          </p>
        </div>
        <div className="box3">
          <h2>secure shopping</h2>
          <p>
            Curabitur vel elementum velit. Praesent non enim molestie, dapibus
            nulla ac, tempor purus. Nulla porttitor lectus volutpat lacinia
            sollicitudin. Sed gravida dapibus eros sed iaculis.
          </p>
        </div>
        <div className="box4">
          <h2>24/7 customer support</h2>
          <p>
            Nulla volutpat pulvinar pellentesque. Donec condimentum nec lacus ac
            vestibulum. Sed venenatis interdum malesuada. Morbi pulvinar, ipsum
            et lacinia volutpat, tortor dolor rhoncus lacus, sed hendrerit ante
            lectus non lectus.
          </p>
        </div>
      </div>
      <div className="btm">
        <div className="subscribe">
          <p>
            Sed non gravida ligula. Nam viverra neque vitae imperdiet euismod.
          </p>
        </div>
        <div className="genderpick">
          <input type="radio" id="women" value="women" />
          <label for="woman">woman</label>
          <input type="radio" id="men" value="men" />
          <label for="man">man</label>
          <input type="radio" id="both" value="both" />
          <label for="both">both</label>
        </div>
        <div className="email">
          <input
            type="text"
            id="email-form"
            placeholder="Vivamus in mi justo..."
          />
          <input type="submit" value="no okcia, dajesh" className="okcia" />
        </div>
        <div className="terms">
          <p>
            Ut massa diam, congue sed nibh nec, ultricies porta lectus. Sed et
            ipsum nisi. Sed luctus ac sem ac tempus. Nunc ullamcorper nisl leo,
            in placerat urna rhoncus eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlimFooter;
