import React from 'react'
import { NavLink } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

import styles from './topbar.module.css'
import Navbar from '../../navbar/Navbar'
import chef from '../../../assets/chef.png'
import recipesHome from '../../../assets/recipesHome.png'
import placeholderChef from '../../../assets/placeholderChef.png'
import placeholderImgCard from '../../../assets/placeholderImgCard.jpg'

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
                  <LazyLoadImage src={recipesHome} alt="Recipes" effect="blur" placeholderSrc={placeholderImgCard}/>
                  <span>500+ Recipes</span>
                </div>
            </div>
            <div className={styles.lazyImgDiv}> 
              <LazyLoadImage className={styles.chefImg} src={chef} alt="Chef" effect="blur" placeholderSrc={placeholderChef}/>
            </div>
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