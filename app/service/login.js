const Service = require('egg').Service;
// const utility = require("utility");

class LoginService extends Service {
    async index(datas) {
        const loginData = datas;
        let data = {};
        try {
            const msg = await this.app.mysql.get('user', {username:loginData.username});
            // let md5_password = utility.md5('lao'+msg.password+'er');
            if (msg&&msg.password===loginData.password) {
                data = {
                    code: 1,
                    data: '',
                    msg: "登录成功"
                }
            } else {
                data = {
                    code:0,
                    data:error,
                    msg:"密码错误"
                }
            }
        } catch(error){
            data = {
                code:0,
                data:error,
                msg:"用户名或密码错误"
            }
        }
        return data;
    }
}

module.exports = LoginService;