const Controller = require('egg').Controller;

class IndexController extends Controller {
    async index() {
        const msg= '首页'
        await this.ctx.render('index.tpl', msg);
    }
}

module.exports = IndexController;