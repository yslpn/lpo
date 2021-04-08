import React from "react"
import { createUseStyles } from "react-jss"

import Header from '../../components/Header'
import FormBanner from './components/FormBanner';
import MainBanner from './components/MainBanner';
import ProjectsBanner from './components/ProjectsBanner';
import styles from "./styles"

const useStyles = createUseStyles(styles);

const MainPage = () => {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <Header />
        <MainBanner />
        <ProjectsBanner />
        <FormBanner />
      </div>
  );
};

export default MainPage;
