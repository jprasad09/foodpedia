import React from 'react'
import styles from './recipeCard.module.css'
import { BsBookmarkPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { fetchRecipesById } from '../../../../store/recipeSlice'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({ id, name, image }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getSingleRecipe = (id) => {
    dispatch(fetchRecipesById(id))
    navigate(`/recipe/${id}`)
  }

  return (
    <div className={styles.recipeCard}>
        <img src={image} alt="Recipe" />
        <h3>{name}</h3>
        <div className={styles.buttonContainer}>
            <div className={styles.firstContainer}>
              <button onClick={() => getSingleRecipe(id)} >Cook Now</button>
            </div>
            <BsBookmarkPlus className={styles.bookmark}/>
        </div>
    </div>
  )
}

export default RecipeCard