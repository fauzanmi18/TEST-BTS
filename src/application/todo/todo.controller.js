import todoService from "./todo.service.js"

const getAllChecklists = (req, res, next) => {
    try {
        const result = todoService.getAllChecklists()

        res.status(200).json({
            message: 'Success get checklist',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const createChecklist = (req, res, next) => {
    try {
        const data = req.body

        const result = todoService.createChecklist(data)

        res.status(201).json({
            message: 'Success create checklist',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const deleteChecklist = (req, res, next) => {
    try {
        const checklistId = req.query.checklistId

        const result = todoService.deleteChecklist(checklistId)

        res.status(200).json({
            message: 'Success delete checklist',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getChecklistItems = (req, res, next) => {
    try {
        const checklistId = req.params.checklistId

        const result = todoService.getChecklistItems(checklistId)

        res.status(200).json({
            message: 'Success get checklist items',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const createChecklistItem = (req, res, next) => {
    try {
        const checklistId = req.params.checklistId
        const data = req.body
        
        const result = todoService.createChecklistItem(checklistId, data)

        res.status(201).json({
            message: 'Success create checklist items',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getChecklistItemById = (req, res, next) => {
    try {
        const checklistItemId = req.params.checklistItemId

        const result = todoService.getChecklistItemById(checklistItemId)

        res.status(200).json({
            message: 'Success get checklist item',
            data: result
        })
    } catch (error) {
        next(error)
    }
    
}

const updateChecklistItemStatus = (req, res, next) => {
    try {
        const checklistItemId = req.params.checklistItemId
        const status = req.body.status

        const result = todoService.updateChecklistItemStatus(checklistItemId, status)

        res.status(201).json({
            message: 'Success update checklist item',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const deleteChecklistItem = (req, res, next) => {
    try {
        const checklistItemId = req.params.checklistItemId

        const result = todoService.deleteChecklistItem(checklistItemId)

        res.status(201).json({
            message: 'Success delete checklist item',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const renameChecklistItem = (req, res, next) => {
    try {
        const checklistItemId = req.params.checklistItemId
        const name = req.body.name

        const result = todoService.renameChecklistItem(checklistItemId, name)

        res.status(201).json({
            message: 'Success rename checklist item',
            data: result
        })
    } catch (error) {
        next(error)
    }
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