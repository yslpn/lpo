import React from "react"
import { createUseStyles } from "react-jss"
import styles from "./styles"
import Header from '../../components/Header'

const useStyles = createUseStyles(styles);

const MainPage = () => {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <Header />
      </div>
  );
};

export default MainPage;
