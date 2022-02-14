const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'HI'})
})

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'HI'})
})

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'HI'})
})

module.exports = {getGoals, setGoals, updateGoals, deleteGoals}