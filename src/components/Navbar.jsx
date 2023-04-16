import React from "react";
import classes from'./Navbar.module.css'
/*
let classes = {
  'nav': 'Navbar_nav__7ha85',
  'item': 'Navbar_item__jKTqh'
}
*/
function Navbar(){
    return(
        <nav className={classes.nav}>
        <div className={classes.item}>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
        </div>
      </nav>
    )
}
export default Navbar;