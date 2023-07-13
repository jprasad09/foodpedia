import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './userProfile.module.css'
import Navbar from '../../components/navbar/Navbar'
import RecipeCard from '../../components/recipes/recipeList/recipeCard/RecipeCard'

const UserProfile = () => {

  const { user, isAuthenticated } = useAuth0()

  let arr = JSON.parse(localStorage.getItem(`${user?.email}`))
  
  return (
    <section className={styles.userProfileContainer}>
      <ToastContainer 
        position="top-center"
        autoClose={2000}
      />

      <Navbar />

      {
        isAuthenticated ? 
        
        <div className={styles.contentContainer}>
          <h1 className={styles.userEmail}>Hey {user?.nickname}!</h1>
          <div className={styles.recipesContainer}>
            <h3 className={styles.heading}>Saved Recipies</h3>
            <div className={styles.recipeCardsContainer}>
            { arr && arr.length >= 1 ? 
              arr?.map(({ recipeId, name, image }) => {
                return <RecipeCard key={recipeId} name={name} image={image} recipeId={recipeId} />
              }) 
              : 
              <h3 className={styles.notfound}>No saved recipes</h3>
            }
            </div>
          </div>
        </div> : 

        <h1 className={styles.signinMsg}>Please login to view details</h1>
      }

    </section>
  )
}

export default UserProfile