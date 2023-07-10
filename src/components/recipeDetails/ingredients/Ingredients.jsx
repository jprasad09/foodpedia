import React from 'react'
import styles from './ingredients.module.css'
import { useSelector } from 'react-redux'

const Ingredients = () => {

  const { singleRecipe } = useSelector((state) => state.recipe)

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
            ingredientsArr.map((ingredient, index) => {
              return <span className={styles.ingredient} key={index}>{`${ingredient} :`}</span>
            })
          }
        </div>
        <div className={styles.contentContainer}>
          {
            measuresArr.map((measure, index) => {
              return <span className={styles.measure} key={index}>{measure}</span>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Ingredients