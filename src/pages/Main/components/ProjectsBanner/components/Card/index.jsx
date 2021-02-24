import React from 'react'
import { createUseStyles } from "react-jss"
import styles from "./styles"

const useStyles = createUseStyles(styles);

const Card = item => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={item.image} alt={item.title} className={classes.image} />
      <p className={classes.title}>
        {item.title}
      </p>
      <p className={classes.description}>
        {item.description}
      </p>
      <div className={classes.bottomRow}>
        <button className={classes.button}>
          читать дальше
        </button>
        <div className={classes.dateBlock}>
          {item.date}
        </div>
      </div>
    </div>
  )
}

export default Card