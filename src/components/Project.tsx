import classes from './Project.module.css'
import vidhubBanner from '../assets/vidhub_banner.svg'
import learnHubBanner from '../assets/learnhub_banner.svg'
import React from 'react'
import { InView } from 'react-intersection-observer'
import { Box, Slide } from '@mui/material'

const Project = () => {
  const [inView, setInView] = React.useState(false)
  const containerRef = React.useRef<HTMLElement>(null)

  return (
    <Box sx={{ overflow: 'hidden' }} ref={containerRef}>
      <div className={classes.body}>
        <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 1400 } : {})}>
          <h2 className={classes.title}>Project</h2>
        </Slide>

        <InView onChange={setInView} triggerOnce={true}>
          <div className={classes.container}>
            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 1400 } : {})}>
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
            </Slide>

            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 1700 } : {})}>
              <a href="https://learnhub.chtah.me" target="_blank" rel="noopener noreferrer">
                <div className={classes.card}>
                  <img className={classes.image} src={learnHubBanner} />
                  <div className={classes.cardText}>
                    <div className={classes.cardTextUp}>
                      <p className={classes.projectName}>LearnHub</p>
                      <p className={classes.description}>This project is video learning web application</p>
                    </div>
                    <div className={classes.cardTextDown}>
                      <p className={classes.status}>In-progress</p>
                    </div>
                  </div>
                </div>
              </a>
            </Slide>
          </div>
        </InView>
      </div>
    </Box>
  )
}

export default Project
