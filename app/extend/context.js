// 分析访问来源端
module.exports = {
    get isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        return iosReg.test(this.get(user-agent));
    }
}