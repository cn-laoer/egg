const Controller = require('egg').Controller;
const ms = require('ms');

class LoginController extends Controller {
    async index() {
        const ctx = this.ctx;
        // 设置cookie
        ctx.cookies.set('loginCookie',this.config.keys,{
            httpOnly: true,
            // signed: false,
            encrypt: true,
            // overwrite: true
        });
        ctx.session.user = 'blaoer';
        ctx.session.maxAge = ms('2d');
        const msg = ctx.request.body;
        const login = await ctx.service.login.index(msg);
        ctx.body = login;
    }
}

module.exports = LoginController;