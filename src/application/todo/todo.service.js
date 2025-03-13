import { responseError } from "../../utils/utils.js";
import todoRepository from "./todo.repository.js"
import { v4 as uuidv4 } from 'uuid';

const getAllChecklists = () => {
    return todoRepository.getAllChecklists()
}

const createChecklist = (data) => {
    const create = {
        id: uuidv4(),
        name: data.name,
    }

    return todoRepository.createChecklists(create)
}

const deleteChecklist = (id) => {
    const isChecklistExist = todoRepository.findChecklist(id)

    if(isChecklistExist.length == 0){
        throw responseError(404, 'Checklist not found')
    }

    return todoRepository.deleteChecklist(id)
}

const getChecklistItems = (checklistId) => {
    return todoRepository.getChecklistItems(checklistId)
}

const createChecklistItem = (checklistId, data) => {
    const create = {
        id: uuidv4(),
        checklistId: checklistId,
        name: data.name,
        status: 'Belum dilakukan'
    }

    return todoRepository.createChecklistItem(create)
}

const getChecklistItemById = (checklistItemId) => {
    const ischecklistItemIdExist = todoRepository.findChecklistItemId(checklistItemId)

    if(ischecklistItemIdExist.length == 0){
        throw responseError(404, 'Checklist item not found')
    }

    return todoRepository.getchecklistItemById(checklistItemId)
}

const updateChecklistItemStatus = (checklistItemId, status) => {
    const ischecklistItemIdExist = todoRepository.findChecklistItemId(checklistItemId)

    if(ischecklistItemIdExist.length == 0){
        throw responseError(404, 'Checklist item not found')
    }

    return todoRepository.updateChecklistItemStatus(checklistItemId, status)
}

const deleteChecklistItem = (checklistItemId) => {
    const ischecklistItemIdExist = todoRepository.findChecklistItemId(checklistItemId)

    if(ischecklistItemIdExist.length == 0){
        throw responseError(404, 'Checklist item not found')
    }

    return todoRepository.deleteChecklistItem(checklistItemId)
}

const renameChecklistItem = (checklistItemId, name) => {
    const ischecklistItemIdExist = todoRepository.findChecklistItemId(checklistItemId)

    if(ischecklistItemIdExist.length == 0){
        throw responseError(404, 'Checklist item not found')
    }

    return todoRepository.renameChecklistItem(checklistItemId, name)
}

export default {
    getAllChecklists,
    createChecklist,
    deleteChecklist,
    getChecklistItems,
    createChecklistItem,
    getChecklistItemById,
    updateChecklistItemStatus,
    deleteChecklistItem,
    renameChecklistItem
}