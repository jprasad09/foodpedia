import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from "uuid"

import styles from './searchForm.module.css'
import { fetchRecipesByCusine, fetchRecipesBySearchTerm } from '../../../store/recipeSlice'
import { fetchCuisines } from '../../../store/cuisineSlice'

const SearchForm = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [cuisineFilter, setCuisineFilter] = useState(undefined)

  const { cuisines } = useSelector((state) => state.cuisine)
  const { filterBy } = useSelector((state) => state.recipe)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCuisines())
  }, [])

  // handling user behaviour and getting user's search term
  const handleSearchTerm = (e) => {
    e.preventDefault()
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchTerm( prevState => e.target.value )
    } else {
      setErrorMsg( prevState => "Invalid search term ..." )
    }
  }

  // dispatching action to get recipes based on user's search term
  const handleSearchResult = (e) => {
    e.preventDefault()
    dispatch(fetchRecipesBySearchTerm(searchTerm))
    setSearchTerm( prevState => '' )
  }

  return (
    <header className={styles.searchForm}>
        <h1>Recipes</h1>
        <div className={styles.searchInputContainer}>
            <form onSubmit={(e) => handleSearchResult(e)}>
                <input value={searchTerm} onChange={(e) => handleSearchTerm(e)} type ="text" placeholder='Hit enter to search...' />
                <BsSearch className={styles.searchIcon} size = {20} />
            </form>
            <select value={filterBy === 'category' || filterBy === 'search' ? 'Filter by Cuisine' : cuisineFilter} 
                name="filter" 
                id="filter" 
                className={styles.filter}
                onChange={(e) => {
                  setCuisineFilter(e.target.value)
                  dispatch(fetchRecipesByCusine(e.target.value))
                }}>
                <option disabled>Filter by Cuisine</option>
                {
                  cuisines?.map(({ strArea }) => {
                    return <option key={uuidv4()} value={strArea}>{strArea}</option>
                  })
                }
            </select>
        </div>
    </header>
  )
}

export default SearchForm