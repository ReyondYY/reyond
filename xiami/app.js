
let express = require('express');

let app = express();

app.listen(3000);

app.set('views', './views');

app.set('view engine', 'xtpl');

app.use(express.static('public'));

// 在 express 中，设计了中间件这个概念
// 所谓中间件就是指在请求或响应的中间阶段
// 对请求和响应做出处理的一系列逻辑

// 通过 use 方法来实现这一概念
// use 方法可以支持两个参数
app.use((req, res, next) => {
    // req.zyc = '赵玉川';
    // res.abc = 'itcast';
    next();
});

// 中间件的本质就是一个函数，此函数可以接收到请求
// 和响应，并且在此函数内部处理对请求和响应的逻辑

// 常见的写法
// function static() {

//     return function () {

//     }
// }

// app.use(static());

// 关于next
app.use(function (req, res, next) {

    // next 将请求和响应传递给下一中间件
    // 如果不调用 next 那么下一个中间件
    // 会执行等待
    next();
});

// 关于顺序
app.use((req, res, next) => {
    // console.log(req.zyc);
    // console.log(res.abc);
    next();
});

// 中间件支持路由
app.use('/add', (req, res, next) => {
    req.demo = '测试';
    res.test = '测试吧';
    next();
})

// 所有路由
// app.use(() => {});

app.get('/add', (req, res) => {
    console.log(req.demo);
    console.log(res.test);
    res.render('index', {});
})