import React from 'react'
import styles from "./cssModules/Navbar.module.css"
export default function Navbar({handleNavClick}) {
  return (
    <div className={styles.nav}>
        <h2 onClick={handleNavClick}
        className={styles.navheading}>
          <u>Photopholio</u>
        </h2>
    </div>
  )
}
