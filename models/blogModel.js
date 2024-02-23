const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    list: {
        type: []
    },
    image:{
        type:String
    },
    title:{
        type:String
    }
},
    { timestamps: true })


module.exports = mongoose.model('blog', blogSchema)


