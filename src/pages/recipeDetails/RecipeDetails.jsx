import React, { useEffect } from 'react'
import styles from './recipeDetails.module.css'
import Navbar from '../../components/navbar/Navbar'
import Instructions from '../../components/recipeDetails/instructions/Instructions'
import Ingredients from '../../components/recipeDetails/ingredients/Ingredients'
import ImageSection from '../../components/recipeDetails/imageSection/ImageSection'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchRecipesById } from '../../store/recipeSlice'

const RecipeDetails = () => {

  const dispatch = useDispatch()

  const { singleRecipe } = useSelector((state) => state.recipe)

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchRecipesById(id))
  }, [])

  return (
    <section className={styles.recipeDetailsContainer}>
      <Navbar />
      <h1 className={styles.recipeName} >{singleRecipe.strMeal}</h1>
      <div className={styles.instructionsAndIngredientsContainer}>
        <ImageSection />
        <Ingredients />
      </div>
      <Instructions />
    </section>
  )
}

export default RecipeDetails