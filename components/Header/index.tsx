import React from "react";
import styles from "./index.module.scss";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link } from "react-scroll";

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
  return (
    <div className={styles.header} style={props.style}>
      <p>Duc Tuan Nguyen</p>
      <div className={styles.moreIcon}>
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
  );
};

export default Header;
