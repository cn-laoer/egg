const Service = require('egg').Service;

class GoodsService extends Service {
    async list(pages, pageSizes,names,types) {
        let page = pages!=null?pages:1;
        let pageSize = pageSizes!=null?pageSizes:10;
        let name = names!=''?String(names):'';
        let type = types>0?types:'';
        // 设置cookie
        const ctx = this.ctx;
        let pageSql = `select count('id') from goods_list`;
        // 按条件查询
        let dataSql = '';
        if (name!=''&&type=='') {
            dataSql = "select * from goods_list where 'delete' = 0 and `goods_name` like '%"+name+"%' limit ?,?";
            pageSql = "select count('id') from goods_list where 'delete' = 0 and `goods_name` like '%"+name+"%'";
        } else if (name==''&&type!='') {
            dataSql = "select * from goods_list where 'delete' = 0 and `type` = "+type+" limit ?,?";
            pageSql = "select count('id') from goods_list where 'delete' = 0 and `type` = "+type;
        } else if (name!=''&&type!='') {
            dataSql = "select * from goods_list where 'delete' = 0 and `goods_name` like '%"+name+"%' and `type` = "+type+" limit ?,?";
            pageSql = "select count('id') from goods_list where 'delete' = 0 and `goods_name` like '%"+name+"%' and `type` = "+type;
        } else if (name==''&&type=='') {
            dataSql = `select * from goods_list where 'delete' = 0 limit ?,?`;
        }
        let data = await this.app.mysql.query(dataSql, [(page-1)*pageSize,Number(pageSize)]);
        let totalNum = await this.app.mysql.query(pageSql);
        // const data = await this.app.mysql.select('goods_list', {
        //     where: {delete:0},
        //     limit: pageSize, // 返回数据量
        //     offset: (page-1)*pageSize, // 数据偏移量
        // })
        let dataList = {
            code: 0,
            total: totalNum[0]["count('id')"],
            msg: "success",
            pageSize: pageSize,
            page: page,
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

    async detail(code) {
        // 设置cookie
        const ctx = this.ctx;
        // 查询一条
        const data = await this.app.mysql.get('goods_list', {bar_code: code});
        let dataList = {
            data
        };
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