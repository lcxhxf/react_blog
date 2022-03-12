module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)                          // 测试接口
    router.get('/default/getArticleList',controller.default.home.getArticleList)        // 获取首页文章接口
    router.get('/default/getArticleById/:id',controller.default.home.getArticleById)    // 获取文章详情页接口
    router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)              // 获取文章类别接口
}