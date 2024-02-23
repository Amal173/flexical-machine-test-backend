const {connectDb}=require('./config/dbConnection')
const blogRouter=require('./router/blogRouter')
const express = require('express');
require('dotenv').config();
const port=process.env.PORT
const cors=require('cors')
const app = express()
connectDb()
app.use(cors())
app.use(express.json());
app.use('/blog',blogRouter)
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})