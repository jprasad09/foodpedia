import React from 'react'
import styles from './categories.module.css'

const categories = [
    {
    "idCategory": "1",
    "strCategory": "Beef",
    "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
    },
    {
    "idCategory": "2",
    "strCategory": "Chicken",
    "strCategoryThumb": "https://www.themealdb.com/images/category/chicken.png",
    },
    {
    "idCategory": "3",
    "strCategory": "Dessert",
    "strCategoryThumb": "https://www.themealdb.com/images/category/dessert.png",
    },
    {
    "idCategory": "4",
    "strCategory": "Lamb",
    "strCategoryThumb": "https://www.themealdb.com/images/category/lamb.png",
    },
    {
    "idCategory": "5",
    "strCategory": "Miscellaneous",
    "strCategoryThumb": "https://www.themealdb.com/images/category/miscellaneous.png",
    },
    {
    "idCategory": "6",
    "strCategory": "Pasta",
    "strCategoryThumb": "https://www.themealdb.com/images/category/pasta.png",
    },
    {
    "idCategory": "7",
    "strCategory": "Pork",
    "strCategoryThumb": "https://www.themealdb.com/images/category/pork.png",
    },
    {
    "idCategory": "8",
    "strCategory": "Seafood",
    "strCategoryThumb": "https://www.themealdb.com/images/category/seafood.png",
    },
    {
    "idCategory": "9",
    "strCategory": "Side",
    "strCategoryThumb": "https://www.themealdb.com/images/category/side.png",
    },
    {
    "idCategory": "10",
    "strCategory": "Starter",
    "strCategoryThumb": "https://www.themealdb.com/images/category/starter.png",
    },
    {
    "idCategory": "11",
    "strCategory": "Vegan",
    "strCategoryThumb": "https://www.themealdb.com/images/category/vegan.png",
    },
    {
    "idCategory": "12",
    "strCategory": "Vegetarian",
    "strCategoryThumb": "https://www.themealdb.com/images/category/vegetarian.png",
    },
    {
    "idCategory": "13",
    "strCategory": "Breakfast",
    "strCategoryThumb": "https://www.themealdb.com/images/category/breakfast.png",
    },
    {
    "idCategory": "14",
    "strCategory": "Goat",
    "strCategoryThumb": "https://www.themealdb.com/images/category/goat.png",
    }
]

const Categories = () => {
  return (
    <div className={styles.categories}>
        {
            categories.map(({idCategory, strCategory, strCategoryThumb}) => {
                return <Category key={idCategory} name={strCategory} image={strCategoryThumb}/>
            })
        }
    </div>
  )
}

const Category = ({name, image}) => {
    return (
        <div className={styles.category}>
            <img src={image} alt="Category" />
            <h1>{name}</h1>
        </div>
    )
}

export default Categories