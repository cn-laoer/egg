const Controller = require('egg').Controller;
const ms = require('ms');

class GoodsController extends Controller {
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
        const newsList = await ctx.service.goods.list();
        // await ctx.render('news/list.tpl', newsList);
        ctx.body = newsList;
    }

    async add() {
        const ctx = this.ctx;
        const author = ctx.session.userId;
        const msg = ctx.query;
        let data = {};
        data.id = Number(msg.id);
        data.name = msg.name;
        data.url = msg.url;
        const cookie = ctx.cookies._keys[0]===this.config.keys?true:false;
        if (cookie) {
            const req = await ctx.service.goods.add(data);
            ctx.body = req;
        } else {
            ctx.body = {
                data: false,
                msg: '添加失败'
            }
        }
    }

    async update() {
        const that = this;
        const ctx = this.ctx;
        const author = ctx.session.userId;
        // const cookie = ctx.cookies.get('cookie')===that.config.keys?true:false;
        const cookie = ctx.cookies._keys[0]===that.config.keys?true:false;
        if (cookie) {
            const req = await ctx.service.goods.update(ctx.query);
            ctx.body = req;
        } else {
            ctx.body = {
                data: false,
                msg: '更新失败',
            }
        }
        // 调用 service 进行业务处理
        // const res = await ctx.service.updateNewsService.update(req);
        // 设置响应内容和响应状态码
        // ctx.body = { id: res.id };
        // ctx.status = 201;
    }

    async del() {
        const ctx = this.ctx;
        const author = ctx.session.userId;
        const msg = ctx.query;
        let data = {};
        data.id = Number(msg.id);
        // ctx.body = data;
        const req = await ctx.service.goods.del(data);
        ctx.body = req;
    }
}

module.exports = GoodsController;
