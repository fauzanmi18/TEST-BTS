import express from 'express'
import userController from '../application/user/user.controller.js'
import todoController from '../application/todo/todo.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

export const appRoute = new express.Router()

// User
appRoute.post('/register', userController.registerUser)
appRoute.post('/login', userController.login)
appRoute.post('/logout', userController.logout)

// Checklist
appRoute.get('/checklist', authMiddleware, todoController.getAllChecklists)
appRoute.post('/checklist', authMiddleware, todoController.createChecklist)
appRoute.delete('/checklist', authMiddleware, todoController.deleteChecklist)

// Checklist item
appRoute.get('/checklist/:checklistId/item', authMiddleware, todoController.getChecklistItems)
appRoute.post('/checklist/:checklistId/item', authMiddleware, todoController.createChecklistItem)
appRoute.get('/checklist/:checklistId/item/:checklistItemId', authMiddleware, todoController.getChecklistItemById)
appRoute.patch('/checklist/:checklistId/item/:checklistItemId', authMiddleware, todoController.updateChecklistItemStatus)
appRoute.delete('/checklist/:checklistId/item/:checklistItemId', authMiddleware, todoController.deleteChecklistItem)
appRoute.patch('/checklist/:checklistId/item/rename/:checklistItemId', authMiddleware, todoController.renameChecklistItem)