import { responseError } from "../utils/utils.js"
import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    try {
        let token = req.headers['authorization']

        console.log(`token`, token)

        if (!token || !token.startsWith('Bearer ') || !token.split(' ')[1]) {
            throw responseError(401, 'Unauthorized')
        }

        token = token.split(' ')[1]

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)
        // const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_KEY)

        req.user = decodedToken

        next()
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return next(responseError(401, 'Token expired'))
        } else if (error.name === 'JsonWebTokenError') {
            return next(responseError(401, 'Invalid token'))
        }

        next(error)
    }
}