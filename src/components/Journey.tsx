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

const Journey = () => {
  const [inView, setInView] = React.useState(false)

  return (
    <div className={classes.body}>
      <h2 className={classes.title}>My Journey</h2>
      <InView onChange={setInView}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              <TimelineContent sx={{ padding: 0, margin: 0 }}>
                <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                  <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
                </TimelineDot>
              </TimelineContent>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade in={inView} {...(inView ? { timeout: 1000 } : {})}>
                <Typography className={classes.firstText} variant="h6">
                  Bootcamp at Cleverse Academy
                </Typography>
              </Fade>
              <Fade in={inView} {...(inView ? { timeout: 1000 } : {})}>
                <Typography className={classes.secondText}>11 Sep - Now</Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                style={{ transitionDelay: inView ? '400ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.firstText} variant="h6">
                  AWS Certified Cloud Practitioner
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transitionDelay: inView ? '400ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.secondText}>10 Oct 2023</Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '800ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.firstText} variant="h6">
                  AWS re/Start Graduate
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '800ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.secondText}>July - 29 Sep 2023</Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1200ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.firstText} variant="h6">
                  Google Cybersecurity Certificate
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1200ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.secondText}>5 Sep 2023</Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '15px', px: 2, fontSize: '10rem' }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1600ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.firstText} variant="h6">
                  Mechanical Engineer
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '1600ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.secondText}>June 2018 - July 2023</Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
              <TimelineDot sx={{ backgroundColor: '#4E9AFF', padding: '5px', m: 0 }}>
                <TimelineDot sx={{ backgroundColor: '#ffffff', padding: '10px', m: 0 }}></TimelineDot>
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: '#4e9aff', width: '5px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '15px', px: 2 }}>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2000ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography
                  className={classes.firstText}
                  variant="h6"
                  sx={{
                    fontSize: '20px',
                    '@media (max-width:600px)': {
                      fontSize: '15px',
                    },
                  }}
                >
                  B.E. in Naval Architech And Marine Engineering
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2000ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.firstText} variant="body1">
                  Kasetsart University Sriracha Campus
                </Typography>
              </Fade>
              <Fade
                in={inView}
                style={{ transformOrigin: '0 0 0', transitionDelay: inView ? '2000ms' : '0ms' }}
                {...(inView ? { timeout: 1500 } : {})}
              >
                <Typography className={classes.secondText}>May 2018</Typography>
              </Fade>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </InView>
    </div>
  )
}
export default Journey
