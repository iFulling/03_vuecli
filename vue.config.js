const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: './07_src_todolist/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //     },
    // }

    // 开启代理
    // devServer: {
    //     proxy: 'http://localhost:5000/'
    // }
    // devServer: {
    //     proxy: {
    //         '/xx': {
    //             target: "http://localhost:5000/",
    //             pathRewrite: { '^/xx': "" },
    //             ws: true,
    //             changeOrigin: true
    //         },
    //         '/x': {
    //             target: "http://localhost:5001/",
    //             pathRewrite: { '^/x': "" },
    //             ws: true,
    //             changeOrigin: true
    //         }
    //     }
    // }
})