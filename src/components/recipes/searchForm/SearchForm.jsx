import React, { useEffect, useState } from 'react'
import styles from './searchForm.module.css'
import { BsSearch } from 'react-icons/bs'
import { fetchRecipesByCusine, fetchRecipesBySearchTerm } from '../../../store/recipeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCuisines } from '../../../store/cuisineSlice'

const SearchForm = () => {

  const dispatch = useDispatch()

  const { cuisines } = useSelector((state) => state.cuisine)
  const { filterBy } = useSelector((state) => state.recipe)

  const [searchTerm, setSearchTerm] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    dispatch(fetchCuisines())
  }, [])

  const handleSearchTerm = (e) => {
    e.preventDefault()
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchTerm(e.target.value);
    } else {
      setErrorMsg("Invalid search term ...")
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault()
    dispatch(fetchRecipesBySearchTerm(searchTerm))
    setSearchTerm('')
  }

  return (
    <header className={styles.searchForm}>
        <h1>Recipes</h1>
        <div className={styles.searchInputContainer}>
            <form onSubmit={(e) => handleSearchResult(e)}>
                <input value={searchTerm} onChange={(e) => handleSearchTerm(e)} type ="text" placeholder='Hit enter to search...' />
                <BsSearch className={styles.searchIcon} size = {20} />
            </form>
            <select value={filterBy === 'category' || filterBy === 'search' ? 'Filter by Cuisine' : undefined} onChange={(e) => dispatch(fetchRecipesByCusine(e.target.value))} name="filter" id="filter" className={styles.filter}>
                <option disabled>Filter by Cuisine</option>
                {
                  cuisines.map(({ strArea }, index) => {
                    return <option key={index} value={strArea}>{strArea}</option>
                  })
                }
            </select>
        </div>
    </header>
  )
}

export default SearchForm