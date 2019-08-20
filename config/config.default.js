exports.keys  = 'blaoer666666';
// 添加view配置
exports.view = {
    defauleViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

exports.news = {
    pageSize: 5,
    serviceUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.middleware = [
    'robot'
];
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};
// mysql
exports.mysql = {
    client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'admin',
        database: 'blaoer',
    },
    app: true,
    agent: false
};
// 配置错误页面
exports.onerror = {
    // errorPageUrl: '../app/view/err/index.html'
    // html(err, ctx) {
    //     ctx.body = '<h3>page is has err!</h3>';
    //     ctx.status = 500;
    // },
    // json(err, ctx) {
    //     ctx.body = { message: 'error in this json'};
    //     ctx.status = 500;
    // }
};
// 安全配置
// exports.security = {
//     xframe: {
//         enable: true
//     },

// };

// 跨域开启
exports.security = {
    csrf: {
        enable: false,
        ignoreJSON: true
    },
    // domainWhiteList: ['http://localhost:7001']
    domainWhiteList: ['*']
};
exports.cors = {
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
};