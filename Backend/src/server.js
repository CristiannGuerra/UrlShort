import express from "express"
import ENVIRONMENT from "./config/environment.config.js"
import urlRouter from "./routes/short.router.js"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect(ENVIRONMENT.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB')

    app.listen(ENVIRONMENT.PORT, () => {
        console.log(`Server running on port ${ENVIRONMENT.PORT}`)
    })
})
.catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`)
})

app.use('/api/short', urlRouter)