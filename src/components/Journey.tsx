import classes from './Journey.module.css'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import { InView } from 'react-intersection-observer'
import React from 'react'
import Fade from '@mui/material/Fade'
import { Box, Slide } from '@mui/material'

const Journey = () => {
  const [inView, setInView] = React.useState(false)
  const containerRef = React.useRef<HTMLElement>(null)

  return (
    <Box sx={{ overflow: 'hidden' }} ref={containerRef}>
      <div className={classes.body}>
        <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 800 } : {})}>
          <h2 className={classes.title}>My Journey</h2>
        </Slide>
        <Timeline position="alternate">
          <TimelineItem>
            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 800 } : {})}>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
                <TimelineContent sx={{ padding: 0, margin: 0 }}>
                  <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                    <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
                  </TimelineDot>
                </TimelineContent>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              </TimelineSeparator>
            </Slide>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                {...(inView ? { timeout: 1000 } : {})}
                style={{ transitionDelay: inView ? '800ms' : '0ms' }}
              >
                <Typography
                  className={classes.firstText}
                  variant="h6"
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '15px',
                    },
                  }}
                >
                  Bootcamp at Cleverse Academy
                </Typography>
              </Fade>
              <Fade
                in={inView}
                {...(inView ? { timeout: 1000 } : {})}
                style={{ transitionDelay: inView ? '800ms' : '0ms' }}
              >
                <Typography
                  className={classes.secondText}
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  11 Sep - Now
                </Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 800 } : {})}>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
                <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                  <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              </TimelineSeparator>
            </Slide>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <InView onChange={setInView} triggerOnce={true}>
                <Fade
                  in={inView}
                  style={{ transitionDelay: inView ? '1200ms' : '0ms' }}
                  {...(inView ? { timeout: 1500 } : {})}
                >
                  <Typography
                    className={classes.firstText}
                    variant="h6"
                    sx={{
                      '@media (max-width:600px)': {
                        fontSize: '15px',
                      },
                    }}
                  >
                    AWS Certified Cloud Practitioner
                  </Typography>
                </Fade>
              </InView>
              <Fade
                in={inView}
                style={{ transitionDelay: inView ? '1200ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.secondText}
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  10 Oct 2023
                </Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 800 } : {})}>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
                <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                  <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              </TimelineSeparator>
            </Slide>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1600ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.firstText}
                  variant="h6"
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '15px',
                    },
                  }}
                >
                  AWS re/Start Graduate
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1600ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.secondText}
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  July - 29 Sep 2023
                </Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 800 } : {})}>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
                <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                  <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              </TimelineSeparator>
            </Slide>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1800ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.firstText}
                  variant="h6"
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '15px',
                    },
                  }}
                >
                  Google Cybersecurity Certificate
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1800ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.secondText}
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  5 Sep 2023
                </Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 800 } : {})}>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
                <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                  <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              </TimelineSeparator>
            </Slide>
            <TimelineContent sx={{ py: '15px', px: 2, fontSize: '10rem' }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2000ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.firstText}
                  variant="h6"
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '15px',
                    },
                  }}
                >
                  Mechanical Engineer
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2000ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.secondText}
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  June 2018 - July 2023
                </Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <Slide in={inView} container={containerRef.current} direction="up" {...(inView ? { timeout: 800 } : {})}>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
                <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                  <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              </TimelineSeparator>
            </Slide>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2400ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.firstText}
                  variant="h6"
                  sx={{
                    fontSize: '20px',
                    '@media (max-width:600px)': {
                      fontSize: '10px',
                    },
                  }}
                >
                  B.E. in Marine Engineering
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2400ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.firstText}
                  variant="body1"
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '10px',
                    },
                  }}
                >
                  Kasetsart University Sriracha Campus
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2400ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.secondText}
                  sx={{
                    '@media (max-width:600px)': {
                      fontSize: '10px',
                    },
                  }}
                >
                  May 2018
                </Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </Box>
  )
}
export default Journey
