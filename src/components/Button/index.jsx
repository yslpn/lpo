/* eslint-disable react/prop-types */
import React from 'react'
import cn from 'classnames'
import { createUseStyles } from "react-jss"

import styles from "./styles"

const useStyles = createUseStyles(styles);

const Button = ({ className, children, ...props }) => {
  const classes = useStyles()

  return (
    <button className={cn(classes.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button