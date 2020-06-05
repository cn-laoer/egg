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
// localhost
// exports.mysql = {
//     client: {
//         host: 'localhost',
//         port: '3306',
//         user: 'root',
//         password: 'admin',
//         database: 'blaoer',
//     },
//     app: true,
//     agent: false
// };
// on line
exports.mysql = {
    client: {
        host: '139.224.232.41',
        port: '8066',
        user: 'root',
        password: 'blaoer',
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
exports.session = {
    key:'SESSION_ID',  //key名字
    maxAge:1000*60*24,
    httpOnly:true,
    encrypt:true, //加密 
    renew:true //最大时间范围内，刷新，自动增加最大时间
}