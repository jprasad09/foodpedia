import React from 'react'
import styles from './instructions.module.css'
import { useSelector } from 'react-redux'

const Instructions = () => {

  const { singleRecipe: { strInstructions } } = useSelector((state) => state.recipe)

  let instructions = strInstructions?.split('\r\n')
  instructions = instructions?.filter(instruction => instruction.length > 1)

  return (
    <main className={styles.instructions}>
      <h3>Directions</h3>
      <div className={styles.contentContainer}>
        {
          instructions?.map((ins, index) => {
            return <div className={styles.singleInsContainer} key={index}>
              <div className={styles.onlyInsContainer}>
                <span>{index + 1}</span>
                <p>{ins}</p>
              </div>
              <div className={styles.borderLeft}></div>
            </div>
          })
        }
        <div className={styles.lastBtn}>I Made It</div>
      </div>
    </main>
  )
}

export default Instructions