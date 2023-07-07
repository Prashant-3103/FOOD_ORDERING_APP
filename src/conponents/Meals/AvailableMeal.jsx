import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';





const AvailableMeal = () => {

  const[meals,setMeals] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  const[httpEroor, setHttpError] = useState()


  useEffect(()=>{

    const fetchMeals = async()=>{
      setIsLoading(true)
   const response =  await  fetch('https://custom-hook-9b4d7-default-rtdb.firebaseio.com/meals.json')

   if(!response.ok){
    throw new Error("Something went wrong")
   }
   const responseData = await response.json()
  const loadedMeals = [];


  for(const key in responseData){
    loadedMeals.push({
      id: key,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price
    })
  }
  setMeals(loadedMeals)
  setIsLoading(false)

    }

  fetchMeals().catch((error)=>{
    setIsLoading(false)
    setHttpError(error.message)
  });
  }, [])

if(isLoading){
  return( <section className={classes.MealsLoading}>
    <p>Loading.......</p>
  </section>)
}
if(httpEroor){
  return(
    <section className={classes.MealsError}>
    <p>{httpEroor}</p>
  </section>)

}
    const mealList= meals.map(meal=>{
     return  <MealItem key={meal.id}
     id={meal.id}
     name={meal.name}
     price={meal.price}
     description={meal.description} />
    })
  return (
  <section className={classes.meals}>
    <Card>
       <ul> {mealList}</ul>
    </Card>
  </section>
  )
}

export default AvailableMeal
