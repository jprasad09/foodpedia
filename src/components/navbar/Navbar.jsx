import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

import styles from './navbar.module.css'
import logo from '../../assets/logo.png'
import placeholderLogo from '../../assets/placeholderLogo.png'

const Navbar = () => {

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  const navigate = useNavigate()

  return (
    <nav className={styles.navbar}>
        <h1>
          <LazyLoadImage src={logo} alt="Logo" effect="blur" placeholderSrc={placeholderLogo}/>
          Foodpedia.
        </h1>
        <ul className={styles.menuList}>
            <li><NavLink className={(navData) => navData.isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink></li>
            <li><NavLink className={(navData) => navData.isActive ? styles.activeNavLink : styles.navLink} to="/recipes">Recipes</NavLink></li>
        </ul>

        <div>
        {isAuthenticated ? (
            <div className={styles.profileContainer}>
              <button onClick={() => navigate('/userProfile')} className={styles.loginBtn}>Profile</button>
              <button
                className={styles.loginBtn}
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
            </div>
          ) : (
            <button 
              className={styles.loginBtn} 
              onClick={() => loginWithRedirect()}>
              Login
            </button>
          )}
        </div>
    </nav>
  )
}

export default Navbar