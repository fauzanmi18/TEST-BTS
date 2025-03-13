import { users } from '../../resource/users.js'

const createUser = async (user) => {
    users.push(user)
    return user
}

const findUser = async (whereCondition, selectFields = {}) => {
    return users.find(user => Object.keys(whereCondition)
    .every(key => user[key] === whereCondition[key])) || null
}

const countUser = async (whereCondition) => {
    return users.filter(user => Object.keys(whereCondition)
    .every(key => user[key] === whereCondition[key])).length
}

const updateUser = async (whereCondition, updateData) => {
    const user = await findUser(whereCondition)
    if (user) {
        Object.assign(user, updateData)
        return user
    }
    return null
}

export default {
    createUser,
    findUser,
    countUser,
    updateUser
}