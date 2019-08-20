const Controller = require('egg').Controller;

class getNowTimeController extends Controller {
    async index() {
        this.ctx.body = '数据库当前时间：'+this.app.mysql.literals.now;
    }
}

module.exports = getNowTimeController;