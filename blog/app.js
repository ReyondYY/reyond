
let express = require('express');

let app = express();

app.listen(3000);

app.set('view engine', 'xtpl');

app.set('views', './views');

//获取静态数据；
app.use(express.static('./public'));

//设置主路由
let admin = require('./routes/admin');
let home = require('./routes/home');

app.use('/admin', admin);
app.use('/', home);

