import { todoItems, todos } from '../../resource/todos.js'

const findChecklist = (id) => {
    return todos.filter(item => item.id === id)
}

const getAllChecklists = () => {
    return todos
}

const createChecklists = (data) => {
    todos.push(data)

    const result = todos.filter(item => item.id === data.id)

    return result
}

const deleteChecklist = (id) => {
    const result = todos.filter(item => item.id !== id)

    return result
}

const getChecklistItems = (checklistId) => {
    const result = todoItems.filter(item => item.todoId == checklistId)

    return result
}

const createChecklistItem = (data) => {
    todoItems.push(data)

    const result = todoItems.filter(item => item.checklistId === data.checklistId)

    return result
}

const findChecklistItemId = (checklistItemId) => {
    const result = todoItems.filter(item => item.id == checklistItemId)

    return result
}

const getchecklistItemById = (checklistItemId) => {
    return todoItems.filter(item => item.id == checklistItemId)
}

const updateChecklistItemStatus = (checklistItemId, status) => {
    let checklistItem = todoItems.filter(item => item.id == checklistItemId)

    checklistItem[0].status = status

    const returned = todoItems.filter(item => item.id == checklistItemId)

    return returned
}

const deleteChecklistItem = (checklistItemId) => {
    const index = todoItems.findIndex(item => item.id === checklistItemId)

    if (index !== -1) {
        todoItems.splice(index, 1)
    }

    const result = todoItems.filter(item => item.id !== checklistItemId)

    return result
}

const renameChecklistItem = (checklistItemId, name) => {
    let checklistItem = todoItems.filter(item => item.id == checklistItemId)

    checklistItem[0].name = name

    return todoItems.filter(item => item.id == checklistItemId)
}

export default {
    findChecklist,
    getAllChecklists,
    createChecklists,
    deleteChecklist,
    getChecklistItems,
    createChecklistItem,
    findChecklistItemId,
    getchecklistItemById,
    updateChecklistItemStatus,
    deleteChecklistItem,
    renameChecklistItem
}