import React from "react";
import { useCookies } from "react-cookie";
import "./cookies.css";
import { Link } from "react-router-dom";

const Cookies = ({ setCookiesSet }) => {
  const [cookies, setCookies] = useCookies();

  return (
    <div className="background-blur">
      <div className="cookie-message">
        <h3>Cookie consent</h3>
        <p>
          This website uses cookies to improve your experience. I'll assume
          you're ok with this, but you can opt-out if you wish.
        </p>
        <Link to={`/`} id="another-link">
          {" "}
          <p
            className="accept-button"
            onClick={() => {
              setCookies("CookieConsent", "yes", { path: "/" });
              setCookiesSet(true);
            }}
          >
            Accept
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Cookies;
