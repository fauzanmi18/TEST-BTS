import userRepository from "./user.repository.js"
import bcrypt from 'bcrypt'

const addUser = async(request) => {
    const isUserExist = await userRepository.countUser(
        {username: request.username}
    )

    if(isUserExist == 1){
        throw responseError(400, 'Username already exist')
    }

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(request.password, salt)

    request.password = hashPassword

    const data = await userRepository.createUser(request)

    return data
}

const login = async(request) => {
    const whereCondition = {username: request.username}
    const selectReturn = {
        id: true,
        username: true,
        password: true
    }

    const isUserExist = await userRepository.findUser(whereCondition, selectReturn)
    if(!isUserExist){
        throw responseError('404', 'Invalid username or password')
    }

    // const cekPassword = isUserExist.password == request.password
    const cekPassword = await bcrypt.compare(request.password, isUserExist.password)
    if(!cekPassword){
        throw responseError('404', 'Invalid username or password')
    }

    const accessToken = generateAccessToken({
        userId: isUserExist.id, 
        username: isUserExist.username 
    })

    const refreshToken = generateRefreshToken({
        userId: isUserExist.id, 
        username: isUserExist.username 
    })

    await userRepository.updateUser({id: isUserExist.id, username: isUserExist.username}, {
        token: refreshToken
    }, {id: true})

    return {
        accessToken,
        refreshToken,
        userData: {
            id: isUserExist.id,
            username: isUserExist.username
        }
    }
}

const logout = async(request) => {
    const token = request

    if(!token || token.trim() == ''){
        throw responseError(404, 'No user currently logged in')
    }

    const findUser = await userRepository.findUser(
        { token: token }, {id: true}
    )

    if(!findUser){
        throw responseError(404, 'Invalid user session')
    }

    return userRepository.updateUser(
        { id: findUser.id }, { token: null }, false
    )
}

export default {
    addUser,
    login,
    logout
}