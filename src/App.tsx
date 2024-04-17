import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Cleaning from "./components/pages/Cleaning";
import Finance from "./components/pages/Finance";
import Technology from "./components/pages/Technology";
import Travel from "./components/pages/Travel";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Help from "./components/Help";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Fragment } from "react";
import ScrollButton from "./components/Scrollbutton";

function App() {
  const items = ["Home", "Articles", "About Us", "Contact", "Help"];
  const iconFB = <FontAwesomeIcon icon={faFacebook} />;
  const iconIS = <FontAwesomeIcon icon={faInstagram} />;
  const iconYT = <FontAwesomeIcon icon={faYoutube} />;

  return (
    <>
      <Fragment>
        <BrowserRouter>
          <div>
            <NavBar
              brandName="Everyday Advice for Dummies"
              navItems={items}
            />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/cleaning" element={<Cleaning />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </BrowserRouter>
        <ScrollButton />
      </Fragment>
      <footer className="footer">
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{iconFB}</div>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{iconIS}</div>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{iconYT}</div>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
