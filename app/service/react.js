const Service = require('egg').Service;

class ReactService extends Service {
    async list() {
        const msg = await this.app.mysql.select('react');
        let dataList = {
            msg
        };
        if (!dataList.msg.length&&!dataList.msg.length>0) {
            let msgArr = [];
            msgArr.push(dataList.msg);
            dataList = {
                'data': msgArr
            }
        }
        return dataList;
    }

    async detail(id){
        let dataList = {};
        try {
            const msg = await this.app.mysql.get('react', {id: id});
            dataList = {
                code : 0,
                msg: 'get detail success',
                data: msg
            }
        } catch(error) {
            dataList = {
                code: 1,
                msg: 'get detail has error',
                data: error
            }
        }
        return dataList;
    }

    async add(datas) {
        let data = datas;
        data.create_time = this.app.mysql.literals.now;
        let msg = {};
        try {
            const result = await this.app.mysql.insert('react', data);
            const addSuccess = result.affectedRows === 1;
            if (addSuccess) {
                msg = {
                    code: 0,
                    data: true,
                    msg: 'add success'
                }
            } else {
                msg = {
                    code: 1,
                    data: false,
                    msg: 'add has error'
                }
            }
        } catch (error) {
            msg = {
                code: 1,
                data: false,
                msg: error
            }
        }
        return msg;
    }

    async update(datas) {
        let row = datas;
        row.update_time = this.app.mysql.literals.now;
        let data = {};
        try {
            const result = await this.app.mysql.update('react', row);
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
            const result = await this.app.mysql.delete('react', row);
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
module.exports = ReactService;