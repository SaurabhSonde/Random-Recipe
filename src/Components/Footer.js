import React from "react";
import "./Css/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        Code with ❤️ by
        <a
          href="https://www.instagram.com/iamsaurabh.dev"
          style={{
            marginLeft: "0.3em",
            textDecoration: "none",
          }}
        >
          Saurabh
        </a>
      </footer>
    </div>
  );
};

export default Footer;
