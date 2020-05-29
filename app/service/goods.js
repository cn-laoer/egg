const Service = require('egg').Service;

class GoodsService extends Service {
    async list(page = 1) {
        // 设置cookie
        const ctx = this.ctx;
        // 按条件查询
        const data = await this.app.mysql.select('goods_list', {
            where: {delete:0}
        })
        let dataList = {
            code: 0,
            msg: 'success',
            data
        };
        if (!dataList.data.length&&!dataList.data.length>0) {
            // let msgArr = [];
            dataList = {
                'data': null
            }
        }
        return dataList;
    }

    async add(datas) {
        const row = datas;
        let data = {};
        try {
            const result = await this.app.mysql.insert('goods_list', row);
            const addSuccess = result.affectedRows === 1;
            if (addSuccess) {
                data = {
                    data: true,
                    msg: '商品添加成功！'
                }
            } else {
                data = {
                    data: false,
                    msg: '商品添加失败'
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
            const result = await this.app.mysql.update('goods_list', row);
            const updateSuccess = result.affectedRows === 1;
            if (updateSuccess) {
                data = {
                    data: true,
                    msg: '商品信息修改成功!'
                }
            } else {
                data = {
                    data: false,
                    msg: '商品信息修改失败！'
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
            const result = await this.app.mysql.delete('goods_list', row);
            const addSuccess = result.affectedRows === 1;
            if (addSuccess) {
                data = {
                    data: true,
                    msg: '商品删除成功！'
                }
            } else {
                data = {
                    data: false,
                    msg: '商品删除失败！'
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

module.exports = GoodsService;