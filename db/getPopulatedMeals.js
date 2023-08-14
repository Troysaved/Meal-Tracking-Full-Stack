import { getMeals } from "./getMeals";
import { getRecipes } from './getRecipes'

export const getPopulatedMeals = async ()=> {
    console.log('Fetching meals and recipes');
    const meals = await getMeals();
    const recipes = await getRecipes();

    const populatedMeals = meals.map(meal => ({
        ...meal,
        recipe: recipes.find(recipe => recipe.id === meal.recipeId),
    }));

    console.log('Meals populated', populatedMeals);
    return populatedMeals;
}
