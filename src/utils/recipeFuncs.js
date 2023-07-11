export const saveRecipe = (recipe) => {
  let arr = JSON.parse(localStorage.getItem(`${recipe?.user?.email}`)) || []
  if(arr.length >= 1){
    for(let item of arr){
      if (item.recipeId === recipe.recipeId){
        return
      }
    }
  }
  arr.push(recipe)
  localStorage.setItem(`${recipe?.user?.email}`, JSON.stringify(arr))
}

export const deleteRecipe = (recipe) => {
  let arr = JSON.parse(localStorage.getItem(`${recipe?.user?.email}`)) || []
  if(arr.length >= 1){
    arr = arr.filter((item) => {
      return item.recipeId !== recipe.recipeId
    })
  }
  localStorage.setItem(`${recipe?.user?.email}`, JSON.stringify(arr))
}