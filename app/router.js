module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.index.index);
    router.get('/hello', controller.home.index);
    router.get('/test', controller.test.index);
    router.get('/news', controller.news.list);
    router.get('/newss', controller.newss.list);
    router.get('/add/news', controller.newss.add);
    router.get('/update/news', controller.newss.update);
    router.get('/del/news', controller.newss.del);
    router.get('/time', controller.getNowTime.index);
    router.get('/react', controller.react.list);
    router.get('/react/detail', controller.react.detail);
    router.get('/react/add', controller.react.add);
    router.get('/react/update', controller.react.update);
    router.get('/react/del', controller.react.del);
    router.get('/goods', controller.goods.list);
    router.get('/goods/add', controller.goods.add);
    router.get('/goods/update', controller.goods.update);
    router.get('/goods/del', controller.goods.del);
    router.post('/login', controller.login.index);
}