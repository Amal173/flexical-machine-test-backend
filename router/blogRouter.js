const express = require('express')
const router = express.Router();
const { getBlogs, createBlogs,getOneBlog } = require('../controller/blogController')

router.route('/').get(getBlogs)
router.route('/').post(createBlogs)
router.route('/:id').get(getOneBlog)

module.exports = router
