import express from 'express'
import bodyParser from 'body-parser'
import { routes } from './routes'

const app = express()
app.use(bodyParser.json())

routes.forEach(route => {
    app[route.method](route.path, route.handler)
})

app.listen(8080, () => {

    console.log("server is listening...")
})
