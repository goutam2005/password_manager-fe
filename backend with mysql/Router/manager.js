import express from 'express';
import Password_manager from '../models/password.js';
import { create, deletePassword, read, update } from '../controler/passwordControler.js';

const router = express.Router();
// Create a new user (POST /users)
router.post('/users',create );
router .get('/read', read )
router.put('/users/:id', update)
router.delete('/users/:id', deletePassword)

export default router;

