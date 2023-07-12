import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from "uuid"

import styles from './ingredients.module.css'

const Ingredients = () => {

  const { singleRecipe } = useSelector((state) => state.recipe)

  // creating arrays of ingredients and measures from singleRecipe object
  let ingredientsArr = [], measuresArr = []
  if(singleRecipe){
    for(let props in singleRecipe){
      if(props.includes('strIngredient')){
        if(singleRecipe[props]) ingredientsArr.push(singleRecipe[props])
      }

      if(props.includes('strMeasure')){
        if(singleRecipe[props]){
          if(singleRecipe[props].length >= 1){
            measuresArr.push(singleRecipe[props])
          }
        }
      }
    }
  }

  return (
    <section className={styles.ingredients}>
      <h3>Ingredients</h3>
      <div className={styles.divContainer}>
        <div className={styles.contentContainer}>
          {
            ingredientsArr.map((ingredient) => {
              return <span className={styles.ingredient} key={uuidv4()}>{`${ingredient} :`}</span>
            })
          }
        </div>
        <div className={styles.contentContainer}>
          {
            measuresArr.map((measure) => {
              return <span className={styles.measure} key={uuidv4()}>{measure}</span>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Ingredients