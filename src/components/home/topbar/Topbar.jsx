import React from 'react'
import { NavLink } from "react-router-dom"

import styles from './topbar.module.css'
import Navbar from '../../navbar/Navbar'
import chef from '../../../assets/chef.png'
import recipesHome from '../../../assets/recipesHome.png'

const Topbar = () => {
  return (
    <header className={styles.topbar}>
        <Navbar />

        <div className={styles.divContainer}>
            <div className={styles.textContainer1}>
                <h3>Discover Simple, <br /> Delicious and <br /> <span style={{color: '#F9608D'}}>Fast Recipes!</span></h3>
                <p>A recipe is soulless. The essence of the recipe <br /> must come from you, the cook.</p>
                <NavLink style={{ width: 'fit-content'}} to="/recipes"><button>Check Our Recipes</button></NavLink>
                <div className={styles.recipesHomeContainer}>
                  <img src={recipesHome} alt="Recipes" />
                  <span>500+ Recipes</span>
                </div>
            </div>
            <img className={styles.chefImg} src={chef} alt="Chef" />
            <div className={styles.textContainer2}>
                <h5>Top Recipes</h5>
                <p>A recipe is soulless. The essence <br /> of the recipe must come from <br /> you, the cook.</p>
                <NavLink style={{ width: 'fit-content'}} to="/recipes"><button>Get Recipes</button></NavLink>
            </div>
        </div>
    </header>
  )
}

export default Topbar