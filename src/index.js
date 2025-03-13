import { app } from './config/server.js'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.APP_PORT || 8080

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})