const Controller = require('egg').Controller;

class TestController extends Controller {
    async index() {
        let kie = JSON.stringify(this.ctx.cookies.get('cookie'));
        this.ctx.body = 'cookie---：'+kie + 'keys:  ' + this.config.keys;
    }
}

module.exports = TestController;