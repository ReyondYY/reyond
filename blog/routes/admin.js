let express = require('express');

// 后台主路由
let admin = express.Router();

admin.get('/a', (req, res) => {
    res.render('admin/index', {})

});

module.exports = admin;

