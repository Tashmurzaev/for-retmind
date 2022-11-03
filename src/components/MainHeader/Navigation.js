import React from "react";
import Button from "../UI/button/Button";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <Button className={classes.button} onClick={props.onLogout}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
