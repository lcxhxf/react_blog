/**
 * @description 路由守卫，检查是否已经登录
 *  
 */
module.exports = (options) =>{
    
    return async function adminauth(ctx,next){
        // console.log('ctx.body:'+ctx.body);
        console.log('这里是中间件ctx.session.openId:'+ctx.session.openId)
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
    }
}