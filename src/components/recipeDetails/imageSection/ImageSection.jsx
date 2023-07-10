import React from 'react'
import styles from './imageSection.module.css'
import { useSelector } from 'react-redux'

const ImageSection = () => {

  const { singleRecipe : { strCategory, strArea, strMealThumb, strTags } } = useSelector((state) => state.recipe)

  let tags = []

  strTags?.split(',').forEach(ele => {
    if(ele.length > 1){
      tags.push(ele)
    }
  });
  
  return (
    <section className={styles.imageSection}>
      <img src={strMealThumb} alt="Recipe" />
      <div className={styles.tagsContainer}>
        {
          tags?.map((tag, index) => {
            return <span className={styles.tag} key={index}>{tag}</span>
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