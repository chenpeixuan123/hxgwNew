const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    css: {
        extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8003', //API服务器的地址
                ws: true, //代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: { //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': ''
                }
            }
        },
    },
    configureWebpack: (config) => {
        // vue骨架屏插件配置
        config.plugins.push(new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                    app: path.join(__dirname, './src/utils/skeleton.js'),
                },
            },
            minimize: true,
            quiet: true,
            router: {
                mode: 'hash',
                path: 'aboutHX',
                skeletonId: 'Skeleton1'
            }
        }))
    },
    pwa: {
        iconPaths: {
            favicon32: 'login.ico',
            favicon16: 'login.ico',
            appleTouchIcon: 'login.ico',
            maskIcon: 'login.ico',
            msTileImage: 'login.ico'
        }
    }
}