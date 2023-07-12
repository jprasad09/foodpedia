import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from "uuid"

import styles from './imageSection.module.css'

const ImageSection = () => {

  const { singleRecipe : { strCategory, strArea, strMealThumb, strTags } } = useSelector((state) => state.recipe)

  // converting string to array to get tags
  let tags = []
  strTags?.split(',').forEach(ele => {
    if(ele.length > 1){
      tags.push(ele)
    }
  })
  
  return (
    <section className={styles.imageSection}>
      <img src={strMealThumb} alt="Recipe" loading='lazy'/>
      <div className={styles.tagsContainer}>
        {
          tags?.map((tag) => {
            return <span className={styles.tag} key={uuidv4()}>{tag}</span>
          })
        }
      </div>
      <div className={styles.categoryAndCuisineDivContainer} >
        <div className={styles.contentDiv} >
          <span className={styles.span1} >Category</span>
          <span className={styles.span2}>{strCategory}</span>
        </div>
        <div className={styles.contentDiv}>
          <span className={styles.span1}>Cuisine</span>
          <span className={styles.span2}>{strArea}</span>
        </div>
      </div>
    </section>
  )
}

export default ImageSection