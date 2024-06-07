import asyncHandler from 'express-async-handler';
// @desc: Register a new User
// Access: Public
// method: POST
const registerUser=asyncHandler(async(req,res)=>{
    res.status(201).json({message:"User Registered"})
})
// @desc: Login User
// Access: Public
// method: POST
const loginUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Logged In"})
})
// @desc: Logout user
// Access: Public
// method: GET
const logoutUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Logged Out"})
})
// @desc: Get User Profile
// Access: Public
// method: GET
const getUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Profile"})
})
// @desc: Update User Profile
// Access: Public
// method: PUT
const updateUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Profile Updated"})
})
export {authUser,registerUser,loginUser,logoutUser,getUserProfile,updateUserProfile };