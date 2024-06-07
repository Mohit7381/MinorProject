import express from 'express'
import { authUser, loginUser,updateUserProfile,getUserProfile,logoutUser,registerUser } from '../controller/UserController';

const router = express.Router();
router.get('/auth',authUser)
router.post('/login',loginUser)
router.post('/register',registerUser)
router.get('/logout',logoutUser)
router.get('/profile',getUserProfile)
router.put('/profile',updateUserProfile)

export default router;