import React from 'react'
import styles from './searchForm.module.css'
import { BsSearch } from "react-icons/bs"

const SearchForm = () => {
  return (
    <header className={styles.searchForm}>
        <h1>Recipes</h1>
        <div className={styles.searchInputContainer}>
            <form>
                <input type = "text" placeholder='Search recipes here ...' />
                <BsSearch className={styles.searchIcon} size = {20} />
            </form>
            <select name="filter" id="filter" className={styles.filter}>
                <option selected disabled>Filter by Cuisine</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Canadian">Canadian</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Mexican">Mexican</option>
                <option value="Spanish">Spanish</option>
                <option value="Thai">Thai</option>
            </select>
        </div>
    </header>
  )
}

export default SearchForm