import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1 className="header__title">RwactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
