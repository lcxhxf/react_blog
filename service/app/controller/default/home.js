'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        //获取用户表的数据
        const { ctx, app } = this;
        console.log(app.mysql+'111111111111');
        let result = await app.mysql.get("blog-content",{})
        console.log(result)
        ctx.body=result
    }
}

module.exports = HomeController
