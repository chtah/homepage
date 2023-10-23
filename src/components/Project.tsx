import classes from './Project.module.css'
import vidhubBanner from '../assets/vidhub_banner.svg'
import ComingSoonBanner from '../assets/comingsoon_banner.svg'

const Project = () => {
  return (
    <div className={classes.body}>
      <h2 className={classes.title}>Project</h2>
      <div className={classes.container}>
        <a href="https://vidhub.chtah.me" target="_blank" rel="noopener noreferrer">
          <div className={classes.card}>
            <img className={classes.image} src={vidhubBanner} />
            <div className={classes.cardText}>
              <div className={classes.cardTextUp}>
                <p className={classes.projectName}>VidHub</p>
                <p className={classes.description}>This project is made to learn how to connect to outer api</p>
              </div>
              <div className={classes.cardTextDown}>
                <p className={classes.status}>Complete</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://learn.chtah.me" target="_blank" rel="noopener noreferrer">
          <div className={classes.card}>
            <img className={classes.image} src={ComingSoonBanner} />
            <div className={classes.cardText}>
              <div className={classes.cardTextUp}>
                <p className={classes.projectName}>Learn</p>
                <p className={classes.description}>This project is video learning web apllication</p>
              </div>
              <div className={classes.cardTextDown}>
                <p className={classes.status}>In-progress</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Project
