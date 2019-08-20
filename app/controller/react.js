const Controller = require('egg').Controller;
const ms = require('ms');

class ReactController extends Controller {
    // 查询所有数据
    async list() {
        const ctx = this.ctx;
        // 设置cookie
        ctx.cookies.set('cookie',this.config.keys,{
            httpOnly: false,
            signed: false,
            overwrite: true
        });
        ctx.session.user = 'blaoer';
        ctx.session.maxAge = ms('2d');
        const List = await ctx.service.react.list();
        ctx.body = List;
    }
    // 根据id查详情
    async detail() {
        const ctx = this.ctx;
        const author = ctx.session.userId;
        const msg = ctx.query;
        const cookie = ctx.cookies._keys[0]===this.config.keys?true:false;
        if (cookie) {
            const req = await ctx.service.react.detail(Number(msg.id));
            ctx.body = req;
        } else {
            ctx.body = {
                data: false,
                msg: 'search has error'
            }
        }
    }
    // 添加数据
    async add() {
        const ctx = this.ctx;
        const author = ctx.session.userId;
        const msg = ctx.query;
        const cookie = ctx.cookies._keys[0]===this.config.keys?true:false;
        if (cookie) {
            const req = await ctx.service.react.add(msg);
            ctx.body = req;
        } else {
            ctx.body = {
                data: false,
                msg: 'add has error'
            }
        }
    }
    // 修改数据
    async update() {
        const ctx = this.ctx;
        const author = ctx.session.userId;
        const msg = ctx.query;
        const cookie = ctx.cookies._keys[0]===this.config.keys?true:false;
        if (cookie) {
            const req = await ctx.service.react.update(msg);
            ctx.body = req;
        } else {
            ctx.body = {
                data: false,
                msg: 'update has error'
            }
        }
    }
    // 删除数据
    async del() {
        const ctx = this.ctx;
        const author = ctx.session.userId;
        const msg = ctx.query;
        const cookie = ctx.cookies._keys[0]===this.config.keys?true:false;
        if (cookie) {
            const req = await ctx.service.react.del(msg);
            ctx.body = req;
        } else {
            ctx.body = {
                data: false,
                msg: 'delete has error'
            }
        }
    }
}

module.exports = ReactController;