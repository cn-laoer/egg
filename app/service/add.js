const Service = require('egg').Service;
const path = require('path');
const sd = require('silly-datetime');
const mkdir = require('mkdirp');

class addService extends Service {
    async addImg(fileName) {
        let day = sd.format(new Date(), 'YYYYMMDD');//获取当前日期
        let dir = path.join(this.config.uploadUrl, day);//创建保存路径
        await mkdir(dir);//没有路径则创建
        let date = new Date().getTime();
        let uploadDir = path.join(dir, date+path.extname(fileName));

        return {
            uploadDir,
            saveDir: this.ctx.origin + uploadDir.slice(3).replace(/\\/g,'/')
        }
    }
}

module.exports = addService;