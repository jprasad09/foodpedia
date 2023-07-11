import React, { useState, useEffect } from 'react'
import styles from './recipeDetails.module.css'
import Navbar from '../../components/navbar/Navbar'
import Instructions from '../../components/recipeDetails/instructions/Instructions'
import Ingredients from '../../components/recipeDetails/ingredients/Ingredients'
import ImageSection from '../../components/recipeDetails/imageSection/ImageSection'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchRecipesById } from '../../store/recipeSlice'
import { BsBookmarkPlus, BsBookmarkCheckFill } from 'react-icons/bs'
import { useAuth0 } from "@auth0/auth0-react"
import { saveRecipe, deleteRecipe } from '../../utils/recipeFuncs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MagnifyingGlass } from 'react-loader-spinner'
import { SINGLE_RECIPE_STATUSES } from '../../store/recipeSlice'

const RecipeDetails = () => {

  const dispatch = useDispatch()

  const { singleRecipe, singleRecipeStatus } = useSelector((state) => state.recipe)
  const { idMeal: recipeId, strMeal: name, strMealThumb: image } = singleRecipe

  const [ status, setStatus ] = useState(false)

  const { user, isAuthenticated } = useAuth0()

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchRecipesById(id))
    let arr = JSON.parse(localStorage.getItem(`${user?.email}`)) || []
    if(arr.length >= 1){
      for(let item of arr){
        if (item.recipeId === id){
          setStatus(true)
        }
      }
    }
  }, [])

  const handleSaveRecipe = (recipe) => {
    saveRecipe(recipe)
    setStatus(true)
    toast.success("Recipe saved successfully!")
  }

  const handleDeleteRecipe = (id) => {
    deleteRecipe(id)
    setStatus(false)
    toast.info("Recipe removed successfully")
  }

  if(singleRecipeStatus === SINGLE_RECIPE_STATUSES.LOADING){
    return <div className={styles.loader}>
        <MagnifyingGlass glassColor = 'white' color = 'black'/>
      </div>
  }

  return (
    <section className={styles.recipeDetailsContainer}>
      <ToastContainer 
        position="top-center"
        autoClose={2000}
      />
      <Navbar />
      <div className={styles.nameAndBookmarkContainer}>
        <h1 className={styles.recipeName} >{name}</h1>
        { isAuthenticated ? 
          status ? 
          <BsBookmarkCheckFill onClick={() => handleDeleteRecipe({user, recipeId, name, image})} className={styles.bookmark}/> :
          <BsBookmarkPlus onClick={() => handleSaveRecipe({user, recipeId, name, image})} className={styles.bookmark}/> :
          <BsBookmarkPlus onClick={() => toast.warn("Login to save recipe")} className={styles.bookmarkDisabled}/>
        }
      </div>
      <div className={styles.imageAndIngredientsContainer}>
        <ImageSection />
        <Ingredients />
      </div>
      <Instructions />
    </section>
  )
}

export default RecipeDetails