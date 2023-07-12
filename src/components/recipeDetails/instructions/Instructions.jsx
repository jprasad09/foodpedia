import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from "uuid"

import styles from './instructions.module.css'

const Instructions = () => {

  const { singleRecipe: { strInstructions } } = useSelector((state) => state.recipe)

  // converting string into array of step-wise instructions
  let instructions = strInstructions?.split('\r\n')
  instructions = instructions?.filter(instruction => instruction.length > 1)

  return (
    <main className={styles.instructions}>
      <h3>Directions</h3>
      <div className={styles.contentContainer}>
        {
          instructions?.map((ins, index) => {
            return <div className={styles.singleInsContainer} key={uuidv4()}>
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