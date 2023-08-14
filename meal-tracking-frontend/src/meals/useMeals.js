import { useState, useEffect } from "react";

export const useMeals = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [rawMeals, setRawMeals] = useState([])

    const loadMeals = async () => {
        try {
            const response = await fetch('/meals')
            const rawMealsReponse = await response.json()
            setRawMeals(rawMealsReponse)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        loadMeals()
    }, [])

    return {
        isLoading, 
        meals: rawMeals.map(rawMeal => ({
            ...rawMeal,
            plannedDate: new Date(rawMeal.plannedDate)
        })), 
        setMeals: setRawMeals
    }
}