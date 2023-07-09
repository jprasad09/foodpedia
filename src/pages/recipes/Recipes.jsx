import React from 'react'
import styles from './recipes.module.css'
import Navbar from '../../components/navbar/Navbar'

const Recipes = () => {
  return (
    <section className={styles.recipesContainer}>
      <Navbar />
    </section>
  )
}

export default Recipes