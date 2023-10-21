import classes from './Home.module.css'
import linkinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import mailIcon from '../assets/mail.svg'
import resumeIcon from '../assets/resume.svg'
import scrollDown from '../assets/scrollDown.json'
import { Player } from '@lottiefiles/react-lottie-player'
const Home = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>
        &#123;&nbsp;&nbsp;Hi, I&apos;m Tah <span className={classes.wave}>👋</span>&nbsp;&nbsp;&#125;
      </p>
      <p className={classes.intro}>I have recently come to the realization that I enjoy coding</p>

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
        <li className={classes.resume}>
          <a href="/ChawakornHansuvanich_resume.pdf" target="_blank" rel="noopener noreferrer">
            <img src={resumeIcon} alt="" />
          </a>
        </li>
      </ul>
      <Player className={classes.scrollDown} autoplay loop src={scrollDown}></Player>
    </div>
  )
}

export default Home
