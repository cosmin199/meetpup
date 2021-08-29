import { Link } from "react-router-dom"

import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>react meetpus</div>
      <nav>
        <ul>
          <li>
            <Link to="/">all meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">add new meetup</Link>
          </li>
          <li>
            <Link to="/favorites">my favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
