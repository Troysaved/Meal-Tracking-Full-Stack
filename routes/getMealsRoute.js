import { getPopulatedMeals } from "../db";

export const getMealsRoute = {
    method: 'get',
    path: '/meals',
    handler: async (req, res) => {
        try {
            const meals = await getPopulatedMeals();
            res.status(200).json(meals);
        } catch (error) {
            console.error('Error in getMealsRoute',);

            res.status(500).send('Error fetching meals');
        }
    },
}
