import classes from './Skill.module.css'
import aws_logo from '../assets/aws_logo.png'
import html_logo from '../assets/html_logo.png'
import css_logo from '../assets/css_logo.png'
import javascript_logo from '../assets/javascript_logo.png'
import typescript_logo from '../assets/typescript_logom.png'
import react_logo from '../assets/react_logo.png'
import mysql_logo from '../assets/mysql_logo.png'
import nodejs_logo from '../assets/nodejs_logo.png'
import Fade from '@mui/material/Fade'
import { InView } from 'react-intersection-observer'
import React from 'react'

const Skill = () => {
  const [inView, setInView] = React.useState(false)

  return (
    <InView onChange={setInView} triggerOnce={true}>
      <div className={classes.body}>
        <div className={classes.skillContainer}>
          <p className={classes.title}>Skill</p>
          <div className={classes.container}>
            <Fade in={inView} {...(inView ? { timeout: 500 } : {})}>
              <div className={classes.card}>
                <img src={javascript_logo} />
                <p>JavaScript</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '200ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <img src={html_logo} />
                <p>HTML</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '400ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <img src={css_logo} />
                <p>CSS</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '600ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <img src={typescript_logo} />
                <p>TypeScript</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '800ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <img src={react_logo} />
                <p>React</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '1000ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <img src={nodejs_logo} />
                <p className={classes.longText}>NodeJS/Express</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '1200ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <img src={mysql_logo} />
                <p>MySQL</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '1400ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <img src={aws_logo} />
                <p>AWS</p>
              </div>
            </Fade>
          </div>
        </div>

        <div className={classes.interestContainer}>
          <p className={classes.title}>Interest</p>
          <div className={classes.container}>
            <Fade in={inView} {...(inView ? { timeout: 500 } : {})}>
              <div className={classes.card}>
                <p className={classes.emoji}>📖 </p>
                <p>Read Book</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '200ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>🍿 </p>
                <p>Movie</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '400ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>👾 </p>
                <p>Play Game</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '600ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>📺 </p>
                <p>Anime</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '800ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>🏓 </p>
                <p className={classes.longText}>Table Tennis</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '1000ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>🏸 </p>
                <p>Badminton</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '1200ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>🤖 </p>
                <p>Technology</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '1400ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>🔬 </p>
                <p>Science</p>
              </div>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: inView ? '1600ms' : '0ms' }}
              {...(inView ? { timeout: 200 } : {})}
            >
              <div className={classes.card}>
                <p className={classes.emoji}>🐱 </p>
                <p>Cat</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </InView>
  )
}
export default Skill
