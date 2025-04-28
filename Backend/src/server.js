import express from "express"
import ENVIRONMENT from "./config/environment.config.js"
import urlRouter from "./routes/short.router.js"
import mongoose from "mongoose"

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/urlshortener')

mongoose.connection.on('open', () => {
    app.listen(ENVIRONMENT.PORT, () => {
        console.log(`Server running on port ${ENVIRONMENT.PORT}`)
    })
})

app.use('/api/short', urlRouter)