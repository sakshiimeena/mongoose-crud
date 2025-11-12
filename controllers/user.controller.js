const { default: userModel } = require("../models/user")



// CREATE USER
const createUser = async (req, res) => {
  try {
    
    const { name, email, password } = req.body
    console.log(name,"<==== name from req")
    const user = await userModel.create({name,email,password})
    res.status(201).json({ success: true, data: user })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// READ ALL USERS
const getUser = async (req, res) => {
  try {
    const users = await userModel.find()
    res.status(200).json({ success: true, data: users })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// READ SINGLE USER
const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await userModel.findById(id)

    if (!user) return res.status(404).json({ success: false, message: "User not found" })

    res.status(200).json({ success: true, data: user })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// UPDATE USER (PUT)
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true })

    if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" })

    res.status(200).json({ success: true, data: updatedUser })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// PARTIAL UPDATE (PATCH)
const updateUserPartial = async (req, res) => {
  try {
    const { id } = req.params
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true })

    if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" })

    res.status(200).json({ success: true, data: updatedUser })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await userModel.findByIdAndDelete(id)

    if (!deletedUser) return res.status(404).json({ success: false, message: "User not found" })

    res.status(200).json({ success: true, message: "User deleted successfully" })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  updateUserPartial,
  deleteUser
}
