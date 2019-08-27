const Controller = require('egg').Controller;
const ms = require('ms');

class LoginController extends Controller {
    async index() {
        const ctx = this.ctx;
        // 设置cookie
        ctx.cookies.set('cookie',this.config.keys,{
            httpOnly: false,
            signed: false,
            overwrite: true
        });
        ctx.session.user = 'blaoer';
        ctx.session.maxAge = ms('2d');
        const msg = ctx.request.body;
        const login = await ctx.service.login.index(msg);
        ctx.body = login;
    }
}

module.exports = LoginController;