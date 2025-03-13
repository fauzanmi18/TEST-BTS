import userService from "./user.service.js"

const registerUser = async(req, res, next) => {
    try {
        const request = req.body
        const result = await userService.addUser(request)

        res.status(201).json({
            message: 'Success register user',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const login = async(req, res, next) => {
    try {
        const request = req.body
        const result = await userService.login(request)

        res.cookie('token', result.refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // sameSite: 'None',
            // secure:true
        })

        res.status(200).json({
            message: 'Login success',
            data: {
                accessToken: result.accessToken,
                user: result.userData,
            }
        })
    } catch (error) {
        next(error)
    }
}

const logout = async(req, res, next) => {
    try {
        const request = req.cookies.token

        await userService.logout(request)

        res.clearCookie('token')

        res.status(200).json({
            message: 'Logout success',
            data: null
        })
    } catch (error) {
        next(error)
    }
}

export default {
    registerUser,
    login,
    logout
}