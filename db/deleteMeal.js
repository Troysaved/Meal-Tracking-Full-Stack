import { ObjectId } from 'mongodb'
import { db } from '../db'

export const deleteMeal = async (mealId) => {
    const connection = db.getConnection()
    await connection.collection('meals')
        .deleteOne({_id: ObjectId(mealId) })
}