import React, { useEffect, useState } from 'react'
import styles from './recipeCard.module.css'
import { BsBookmarkPlus, BsBookmarkCheckFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { fetchRecipesById } from '../../../../store/recipeSlice'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
import { saveRecipe, deleteRecipe } from '../../../../utils/recipeFuncs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipeId, name, image }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ status, setStatus ] = useState(false)

  const getSingleRecipe = (recipeId) => {
    dispatch(fetchRecipesById(recipeId))
    navigate(`/recipe/${recipeId}`)
  }

  const { user, isAuthenticated } = useAuth0()

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem(`${user?.email}`)) || []
      if(arr.length >= 1){
        for(let item of arr){
          if (item.recipeId === recipeId){
            setStatus(true)
          }
        }
      }
  }, [])

  const handleSaveRecipe = (recipe) => {
    saveRecipe(recipe)
    setStatus(true)
    toast.success("Recipe saved successfully")
  }

  const handleDeleteRecipe = (id) => {
    deleteRecipe(id)
    setStatus(false)
    toast.info("Recipe removed successfully")
  }

  return (
    <div className={styles.recipeCard}>
        <ToastContainer 
          position="top-center"
          autoClose={2000}
        />
        <img src={image} alt="Recipe" />
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