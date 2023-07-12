import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './categories.module.css'
import { fetchRecipesByCategory } from '../../../store/recipeSlice'
import { fetchCategories } from '../../../store/categorySlice'

const Categories = () => {

    const [ activeCategoryId, setActiveCategoryId ] = useState('1')
    
    const { categories } = useSelector((state) => state.category)
    const { recipes, filterBy } = useSelector((state) => state.recipe)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        filterBy === 'cuisine' || filterBy === 'search' ? setActiveCategoryId( prevState => null ) : null
    }, [recipes])

    // dispatching action for getting recipes based on their category
    const getRecipiesByCategory = (id, category) => {
        dispatch(fetchRecipesByCategory(category))
        setActiveCategoryId( prevState  => id )
    }

    return (
        <div className={styles.categories}>
            {
                categories?.map(({ idCategory, strCategory, strCategoryThumb }) => {
                    return <div key={idCategory} onClick={() => getRecipiesByCategory(idCategory, strCategory)}>
                        <Category id={idCategory} name={strCategory} image={strCategoryThumb} active={activeCategoryId}/>
                    </div> 
                })
            }
        </div>
    )
}


// single category component
const Category = ({ id, name, image, active }) => {
    return (
        <div className={ id===active ? `${styles.category} ${styles.activeCat}` : `${styles.category}`}>
            <img src={image} alt="Category" />
            <h1>{name}</h1>
        </div>
    )
}

export default Categories