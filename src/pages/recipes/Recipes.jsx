import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './recipes.module.css'
import Navbar from '../../components/navbar/Navbar'
import SearchForm from '../../components/recipes/searchForm/SearchForm'
import Categories from '../../components/recipes/categories/Categories'
import RecipeList from '../../components/recipes/recipeList/RecipeList'

const Recipes = () => {
  return (
    <section className={styles.recipesContainer}>
      <ToastContainer 
        position="top-center"
        autoClose={2000}
      />

      <Navbar />
      <SearchForm />
      <div className={styles.contentContainer}>
        <Categories />
        <RecipeList />
      </div>
    </section>
  )
}

export default Recipes