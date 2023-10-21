import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <Link className={classes.logo} to={'/'}>
        <p className={classes.logoName}>CHTAH</p>
      </Link>

      <div className={classes.navRight}>
        <>
          <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/aboutme">
            ABOUT ME{' '}
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/project">
            PROJECT
          </NavLink>
        </>
      </div>
    </div>
  )
}

export default Navbar
