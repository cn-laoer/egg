const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        // 设置cookie
        const ctx = this.ctx;
        // const msg = await this.app.mysql.query('SELECT`id`,`name`,`url`FROM `blaoer`.`news`LIMIT 0, 1000;');
        // 查询多条--全部
        const msg = await this.app.mysql.select('news');
        // 按条件查询
        // const msg = await this.app.mysql.select('news', {
            // where: {status:1}
        // })
        // 查询一条
        // const msg = await this.app.mysql.get('news', {id: 1});
        let dataList = {
            msg
        };
        if (!dataList.msg.length&&!dataList.msg.length>0) {
            let msgArr = [];
            msgArr.push(dataList.msg);
            dataList = {
                'msg': msgArr
            }
        }
        return dataList;
    }

    async add(datas) {
        const row = datas;
        let data = {};
        try {
            const result = await this.app.mysql.insert('news', row);
            const addSuccess = result.affectedRows === 1;
            if (addSuccess) {
                data = {
                    data: true,
                    msg: 'add success'
                }
            } else {
                data = {
                    data: false,
                    msg: 'add has error'
                }
            }
        } catch (error) {
            data = {
                data: false,
                msg: error
            }
        }
        return data;        
    }

    async update(datas) {
        let row = datas;
        row.update_time = this.app.mysql.literals.now;
        let data = {};
        try {
            const result = await this.app.mysql.update('news', row);
            const updateSuccess = result.affectedRows === 1;
            if (updateSuccess) {
                data = {
                    data: true,
                    msg: 'update success'
                }
            } else {
                data = {
                    data: false,
                    msg: 'update has err'
                }
            }
        } catch(error) {
            data = {
                data: false,
                msg: error
            }
        }
        return data;        
    }

    async del(datas) {
        const row = datas;
        let data = {};
        try {
            const result = await this.app.mysql.delete('news', row);
            const addSuccess = result.affectedRows === 1;
            if (addSuccess) {
                data = {
                    data: true,
                    msg: 'del success'
                }
            } else {
                data = {
                    data: false,
                    msg: 'del has error'
                }
            }
        } catch(error) {
            data = {
                data: false,
                msg: error
            }
        }
        return data;        
    }
}

module.exports = NewsService;