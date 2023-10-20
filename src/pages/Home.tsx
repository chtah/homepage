import classes from './Home.module.css'
import { Player } from '@lottiefiles/react-lottie-player'
import constructionLoading from '../assets/construction.json'

const Home = () => {
  return (
    <div>
      <p className={classes.title}>&#123;&nbsp;&nbsp;&nbsp;COMING SOON&nbsp;&nbsp;&nbsp;&#125;</p>
      <p className={classes.title2}>My website is under construction</p>
      <Player className={classes.logo} autoplay loop src={constructionLoading}></Player>
    </div>
  )
}

export default Home
