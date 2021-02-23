import React from 'react'
import { createUseStyles } from "react-jss"
import styles from "./styles"

const useStyles = createUseStyles(styles);


const Header = () => {
  const classes = useStyles();

  const navTitles = [
    'проекты',
    'подать заявку',
    'стать попечителем',
    'о нас',
    'контакты'
  ]

  return (
    <header className={classes.container}>
      <div className={classes.logoBlock}>
        <div className={classes.logoText}>
          Либертарианский
          <span className={classes.marked}>проектный</span>
          офис
        </div>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {navTitles.map((item, index) => (
            <li className={classes.navItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header