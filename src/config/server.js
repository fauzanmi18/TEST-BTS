import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { appRoute } from '../routes/routes.js'
import { errorMiddleware } from '../middleware/error.middleware.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

export const app = express()
app.use(cors({ credentials: true, origin: true}), cookieParser(), express.json(), express.urlencoded({ extended: true }))

app.use('/api', appRoute)

app.use((req, res, next) => {
    res.status(404).json({
        errors: 'Route not found',
    })
})

app.use(errorMiddleware)