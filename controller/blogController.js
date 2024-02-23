const blogs = require('../models/blogModel')
const asyncHandler = require('express-async-handler')

const getBlogs = asyncHandler(async (req, res) => {
    try {
        const blog = await blogs.find()
        if (!blog) {
            res.status(404).json({ error: "blogs not found" })
        }
        res.status(200).json({ blog })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
})

const getOneBlog = asyncHandler(async (req, res) => {
    try {
        const {id}=req.params
        console.log(id)
        const blog = await blogs.findById(id)
        if (!blog) {
            res.status(404).json({ error: "blogs not found" })
        }
        res.status(200).json({ blog })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
})


const createBlogs = asyncHandler(async (req, res) => {
    try {
        const { list } = req.body
        console.log(req.body);
        let {image} = list.find(o => o.image)
        let {title} = list.find(o => o.title)
        console.log(image);
        // const image = 
        const Blog = await blogs.create({
            list, image,title
        })
        res.status(201).json({ Blog })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = { getBlogs, createBlogs,getOneBlog }