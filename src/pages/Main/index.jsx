import React from "react"
import { createUseStyles } from "react-jss"

import Header from '../../components/Header'
import MainBanner from './components/MainBanner';
import styles from "./styles"

const useStyles = createUseStyles(styles);

const MainPage = () => {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <Header />
        <MainBanner />
      </div>
  );
};

export default MainPage;
