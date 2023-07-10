import React, { useEffect, useState } from 'react'
import styles from './categories.module.css'
import { fetchRecipesByCategory } from '../../../store/recipeSlice'
import { fetchCategories } from '../../../store/categorySlice'
import { useDispatch, useSelector } from 'react-redux'

const Categories = () => {

    const dispatch = useDispatch()
    const { categories } = useSelector((state) => state.category)
    const { recipes, filterBy } = useSelector((state) => state.recipe)

    const [ activeCategoryId, setActiveCategoryId ] = useState('1')

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        filterBy === 'cuisine' || filterBy === 'search' ? setActiveCategoryId(null) : null
    }, [recipes])

    const getRecipiesByCategory = (id, category) => {
        dispatch(fetchRecipesByCategory(category))
        setActiveCategoryId(id)
    }

    return (
        <div className={styles.categories}>
            {
                categories.map(({ idCategory, strCategory, strCategoryThumb }) => {
                    return <div key={idCategory} onClick={() => getRecipiesByCategory(idCategory, strCategory)}>
                        <Category id={idCategory} name={strCategory} image={strCategoryThumb} active={activeCategoryId}/>
                    </div> 
                })
            }
        </div>
    )
}

const Category = ({ id, name, image, active }) => {
    return (
        <div className={ id===active ? `${styles.category} ${styles.activeCat}` : `${styles.category}`}>
            <img src={image} alt="Category" />
            <h1>{name}</h1>
        </div>
    )
}

export default Categories