import React from 'react'
import { createUseStyles } from "react-jss"
import styles from "./styles"

const useStyles = createUseStyles(styles);

const MainBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p>hello world</p>
    </div>
  )
}

export default MainBanner