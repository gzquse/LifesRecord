const Blog = require('../models/blog');

const blog = (req, res) => {
    Blog.find().sort({
        createdAt: -1
    }).then(blogs => res.render("index", { title: "所有博客", blogs: blogs }))
        .catch(err => console.log(err))
}

const create = (req, res) => {
    res.render("create", { title: "创建博客" })
}

const save = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);

    blog.save().then(result => res.redirect("/blogs")).catch(err => console.log(err))
}

const details = (req,res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => res.render("details",{blog: result,title:"博客详情"})).catch(err => console.log(err))
}

const deleteBlog = (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result => res.json({redirect: "/blogs"})).catch(err => console.log(err))
}

module.exports = {
    blog,
    create,
    save,
    details,
    deleteBlog
};