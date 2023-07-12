import React from 'react'

import styles from './home.module.css'
import Topbar from '../../components/home/topbar/Topbar'

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <Topbar />
    </section>
  )
}

export default Home