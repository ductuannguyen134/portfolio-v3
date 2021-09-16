import React, { useState } from "react";
import styles from "./index.module.scss";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link } from "react-scroll";
import OutsideAlerter from "../OutsideAlerter";

const navigationBars = [
  {
    name: "About",
  },
  {
    name: "Skills",
  },
  { name: "Education" },
  { name: "Experience" },
  { name: "Project" },
  { name: "Contact" },
];

const Header = ({ ...props }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  return (
    <div>
      {" "}
      <div className={styles.header} style={props.style}>
        <p>Duc Tuan Nguyen</p>
        <div
          className={styles.moreIcon}
          onClick={() => setVisibleSidebar(true)}
        >
          <DehazeIcon style={{ color: "white" }} />
        </div>
        <div className={styles.navBar}>
          {navigationBars.map((bar, index) => (
            <Link
              smooth={true}
              to={`nav-${index}`}
              key={index}
              className={styles.navItem}
            >
              {bar.name}
            </Link>
          ))}
        </div>
      </div>
      {visibleSidebar && (
        <OutsideAlerter setVisibleSidebar={setVisibleSidebar}>
          <div className={styles.sidebar}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={styles.verticalNav}>
                <div
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  className={styles.navItem}
                >
                  Home
                </div>
                {navigationBars.map((bar, index) => (
                  <Link
                    smooth={true}
                    to={`nav-${index}`}
                    key={index}
                    className={styles.navItem}
                    onClick={() => setVisibleSidebar(false)}
                  >
                    {bar.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </OutsideAlerter>
      )}
    </div>
  );
};

export default Header;
