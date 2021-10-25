import React from 'react'
import { createUseStyles } from "react-jss"
import trusteeDefault from '../../../../assets/images/trustee_default.png'
import Card from './components/Card';
import styles from "./styles"

const useStyles = createUseStyles(styles);

const trusteeData = [
  {
    name: 'Марина Мацапулина',
    description: 'Председатель ЛПО',
    image: trusteeDefault,
  },
  {
    name: 'Дмитрий Максимов',
    description: 'Учредитель ЛПО',
    image: trusteeDefault,
  },
  {
    name: 'Дмитрий Петров',
    description: '???',
    image: trusteeDefault,
  },
  {
    name: 'Ярослав Слепухин',
    description: 'Программист, член ЛПР',
    image: trusteeDefault,
  },
]

const TrusteeBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3 className={classes.bannerName}>
          состав попечителей лпо
        </h3>
        <div className={classes.trusteeList}>
          {trusteeData.map((item, index) => <Card key={index} item={item} />)}
        </div>
      </div>

      <div className={classes.linesTop}>
        <svg width="408" height="239" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M51.736.418v237.653M128.064 76.089v152.345M89.9 114.254v95.968M7.05 188.77h172.471M-37.085 150.605h444.592M7.05 112.754h129.224M-37.085 74.589h194.696" /></svg>
      </div>
      <div className={classes.linesBottom}>
        <svg width="770" height="481" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#232323" strokeWidth="3" d="M50.324.898v479.627M204.369 153.616v307.46M127.347 230.639V424.32M-38.332 382.554h807.605M-127.406 305.531h408.914M-38.332 229.139h260.798M-127.406 152.116h392.933" /></svg>
      </div>
    </div>
  )
}

export default TrusteeBanner