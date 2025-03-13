export const errorMiddleware = async(err, req, res, next) => {
    if(!err) return next()

    const status = err.status || 500
    const message = err.message || 'Internal server error'

    return res.status(status).json({
        errors: message
    })
}