import classes from './Footer.module.css'
import linkinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import mailIcon from '../assets/mail.svg'

const Footer = () => {
  return (
    <div className={classes.body}>
      <p className={classes.footer}>Chawakorn Hansuvanich © | all rights reserved</p>
      <ul className={classes.iconList}>
        <li className={classes.linkedIn}>
          <a href="https://www.linkedin.com/in/chtah" target="_blank" rel="noopener noreferrer">
            <img src={linkinIcon} alt="" />
          </a>
        </li>
        <li className={classes.github}>
          <a href="https://github.com/chtah" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="" />
          </a>
        </li>
        <li className={classes.mail}>
          <a href="mailto: chawakorn_ha@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Footer
