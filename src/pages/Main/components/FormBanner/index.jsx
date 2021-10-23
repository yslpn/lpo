import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core';
import { createUseStyles } from "react-jss"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Button from '../../../../components/Button';
import styles from "./styles";

const useStyles = createUseStyles(styles);

const FormBanner = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    projectLinks: '',
    userName: '',
    userAdult: false,
    userTelegram: '',
    userEmail: '',
    userCity: '',
    projectDescription: '',
    helpDescription: ''
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.prevent.default();
    try {
      console.log("Success", formData);
      setOpen(true);
      setFormData({});
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  return (
    <div className={classes.container} id="application">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Заявка успешно отправлена!
        </Alert>
      </Snackbar>
      <h3 className={classes.bannerName}>
        Подать заявку
      </h3>
      <form className={classes.form} onSubmit={onSubmit} method="POST">
        <div className={classes.leftPart}>
          <div className={classes.inputBlock}>
            <label className={classes.labelStrong} htmlFor="projectName">название вашего проекта</label>
            <input className={classes.input} name="projectName" id="projectName" value={formData.projectName} onChange={onChange} required />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="projectLinks">ссылки на ресурсы проекта (сайт, соцсети)</label>
            <input className={classes.input} name="projectLinks" id="projectLinks" value={formData.projectLinks} onChange={onChange} required />
          </div>
          <div className={classes.rowWithCheckbox}>
            <div className={classes.inputBlock} style={{ flex: 1 }}>
              <label className={classes.label} htmlFor="userName">ваше имя</label>
              <input className={classes.input} name="userName" id="userName" value={formData.userName} onChange={onChange} required />
            </div>
            <div className={classes.checkboxBlock}>
              <Checkbox
                id="userAdult"
                name="userAdult"
                className={classes.checkbox}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                checked={formData.userAdult} onChange={onChange}
                required
              />
              <label htmlFor="userAdult" className={classes.checkboxLabel}>мне есть 18</label>
            </div>
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="userTelegram">ваш телеграм</label>
            <input className={classes.input} name="userTelegram" id="userTelegram" value={formData.userTelegram} onChange={onChange} required />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="userEmail">ваш email</label>
            <input className={classes.input} name="userEmail" id="userEmail" type="email" value={formData.userEmail} onChange={onChange} required />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="userCity">ваш город</label>
            <input className={classes.input} name="userCity" id="userCity" value={formData.userCity} onChange={onChange} required />
          </div>
        </div>
        <div className={classes.rightPart}>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="projectDescription">описание проекта  //  дата, идея, число участников</label>
            <textarea className={classes.textArea} name="projectDescription" id="projectDescription" value={formData.projectDescription} onChange={onChange} required />
          </div>
          <div className={classes.inputBlock}>
            <label className={classes.label} htmlFor="helpDescription">описание необходимой помощи</label>
            <textarea className={classes.textArea} name="helpDescription" id="helpDescription" value={formData.helpDescription} onChange={onChange} required />
          </div>
          <Button className={classes.submitButton} type="submit">
            Отправить заявку
          </Button>
        </div>
      </form>
      <div className={classes.diamondSmall}>
        <svg width="498" height="387" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="498" height="387"><path fill="#C4C4C4" d="M.324.259H498v386.417H.324z" /></mask><g mask="url(#a)"><path d="M280.375-128.049l164.39-102.618v196.565l-164.39 98.283v-192.23zM115.983 166.8L280.374 64.181v196.566L115.983 359.03V166.8zM444.764 166.8L609.155 64.181v196.566L444.764 359.03V166.8z" fill="#000" /><path d="M280.375-128.049L115.984-230.667v196.565l164.391 98.283v-192.23zM115.983 166.8L-48.407 64.181v196.566l164.39 98.283V166.8zM444.764 166.8L280.374 64.181v196.566l164.39 98.283V166.8z" fill="#FFA600" /></g></svg>
      </div>

      <div className={classes.diamondBig}>
        <svg width="656" height="723" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M253 126.248L454.368.547v240.78L253 361.718v-235.47zM51.632 487.419L253 361.718v240.78L51.632 722.889v-235.47zM454.368 487.419l201.368-125.701v240.78L454.368 722.889v-235.47z" fill="#000" /><path d="M253 126.248L51.632.547v240.78L253 361.718v-235.47zM51.632 487.419l-201.368-125.701v240.78L51.632 722.889v-235.47zM454.368 487.419L253 361.718v240.78l201.368 120.391v-235.47z" fill="#FFA600" /></svg>
      </div>
    </div>
  )
}

export default FormBanner