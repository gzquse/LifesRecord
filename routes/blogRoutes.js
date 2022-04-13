const express = require('express');
const router = express();
const {blog,create,save,details,deleteBlog} = require("../controllers/blogController");


router.get("/", blog)
// 创建博客路由
router.get("/create",create )
// 提交博客内容
router.post("/", save)
// 博客详情路由
router.get("/:id",details)
// 删除数据路由
router.delete("/:id",deleteBlog)

module.exports = router;