//0.加载express
const express = require('express');
//1.调用express.Router()创建一个路由实例
const router = express.Router();
//2.配置路由规则
router.get('/',function (req,res) {
    res.send('index page')
});
//3.导出路由对象
module.exports = router;
//4.在app.js中通过app.use(路由对象)挂载使之生效