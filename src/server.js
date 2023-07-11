import express from 'express'
import bodyParser from 'body-parser'
import { db } from './db'
import { routes } from './routes'
const app = express()


app.use(bodyParser.json())

routes.forEach(route => {
    app[route.method](route.path, route.handler)
})

app.listen(8080, () => {

    console.log("Server Is Listening On Port 8080")
})
