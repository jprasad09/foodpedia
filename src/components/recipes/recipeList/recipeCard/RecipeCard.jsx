import React, { useEffect, useState } from 'react'
import { BsBookmarkPlus, BsBookmarkCheckFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './recipeCard.module.css'
import { fetchRecipesById } from '../../../../store/recipeSlice'
import { saveRecipe, deleteRecipe } from '../../../../utils/recipeFuncs'
import placeholderImg from '../../../../assets/placeholderImgCard.jpg'

const RecipeCard = ({ recipeId, name, image }) => {
  
  const [ status, setStatus ] = useState(false)

  const { user, isAuthenticated } = useAuth0()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // checking if recipe already exists in storage for particular user
  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem(`${user?.email}`)) || []
      if(arr.length >= 1){
        for(let item of arr){
          if (item.recipeId === recipeId){
            setStatus( prevState => true )
          }
        }
      }
  }, [])

  // dispatching action for getting single recipe based on id
  const getSingleRecipe = (recipeId) => {
    dispatch(fetchRecipesById(recipeId))
    navigate(`/recipe/${recipeId}`)
  }

  // saving recipe
  const handleSaveRecipe = (recipe) => {
    saveRecipe(recipe)
    setStatus( prevState => true )
    toast.success("Recipe saved successfully")
  }

  // removing recipe from storage
  const handleDeleteRecipe = (id) => {
    deleteRecipe(id)
    setStatus( prevState => false )
    toast.info("Recipe removed successfully")
  }

  return (
    <div className={styles.recipeCard}>
        <LazyLoadImage src={image} alt="Recipe" placeholderSrc={placeholderImg} effect="blur" />
        <h3>{name}</h3>
        <div className={styles.buttonContainer}>
            <div className={styles.firstContainer}>
              <button onClick={() => getSingleRecipe(recipeId)} >Cook Now</button>
            </div>
            { isAuthenticated ? 
              status ? 
              <BsBookmarkCheckFill onClick={() => handleDeleteRecipe({user, recipeId, name, image})} className={styles.bookmark}/> :
              <BsBookmarkPlus onClick={() => handleSaveRecipe({user, recipeId, name, image})} className={styles.bookmark}/> :
              <BsBookmarkPlus onClick={() => toast.warn("Login to save recipe")} className={styles.bookmarkDisabled}/>
            }
        </div>
    </div>
  )
}

export default RecipeCard