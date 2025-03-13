import express from 'express'
import userController from '../application/user/user.controller.js'
import todoController from '../application/todo/todo.controller.js'

export const appRoute = new express.Router()

// User
appRoute.post('/register', userController.registerUser)
appRoute.post('/login', userController.login)
appRoute.post('/logout', userController.logout)

// Checklist
appRoute.get('/checklist', todoController.getAllChecklists)
appRoute.post('/checklist', todoController.createChecklist)
appRoute.delete('/checklist', todoController.deleteChecklist)

// Checklist item
appRoute.get('/checklist/:checklistId/item', todoController.getChecklistItems)
appRoute.post('/checklist/:checklistId/item', todoController.createChecklistItem)
appRoute.get('/checklist/:checklistId/item/:checklistItemId', todoController.getChecklistItemById)
appRoute.patch('/checklist/:checklistId/item/:checklistItemId', todoController.updateChecklistItemStatus)
appRoute.delete('/checklist/:checklistId/item/:checklistItemId', todoController.deleteChecklistItem)
appRoute.patch('/checklist/:checklistId/item/rename/:checklistItemId', todoController.renameChecklistItem)