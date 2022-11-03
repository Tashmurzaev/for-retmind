import React from "react";
import NFTImages from "../nftImages/NFTImages";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <NFTImages />
    </Card>
  );
};

export default Home;
