import jwt from 'jsonwebtoken'

export const responseError = (status, message) => {
    const error = new Error(message)
    error.status = status
    return error
}

export const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { 
        expiresIn: '15m' //expire di 15 menit
    })
}

export const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.SECRET_TOKEN_KEY, {
        expiresIn: '1d'
    })
}