import React from 'react'
import styles from './navbar.module.css'
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h1> <img src={logo} alt="" />Foodpedia.</h1>
        <ul className={styles.menuList}>
            <li><NavLink className={(navData) => navData.isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink></li>
            <li><NavLink className={(navData) => navData.isActive ? styles.activeNavLink : styles.navLink} to="/recipes">Recipes</NavLink></li>
        </ul>

        <div>
            <button className={styles.loginBtn}>Login</button>
        </div>
    </nav>
  )
}

export default Navbar