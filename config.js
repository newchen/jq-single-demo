module.exports = {
    mode: 'single',
    
    // 别名
    alias: {
        // 目录别名
        fonts: './src/assets/fonts',
        imgs: './src/assets/imgs',
        pages: './src/pages',
        utils: './src/utils',
        vendor: './src/vendor',
        
        // 文件别名
        'babel-polyfill': './node_modules/babel-polyfill/dist/polyfill.js' // 因为IE兼容，不用min版的，自己压缩
    },
    
    useESlint: false,

    ieSupport: false,

    dll: {
        srcPath: './vendor', // 打包要读取的文件夹目录
        outputPath: './src/vendor', // 文件打包到哪个目录
    
        // 读取哪些文件打包，
        // 注意，除了node_modules目录下面的，只能是srcPath目录下面的文件
        entry: {
            vendor: ['./vendor/jquery', 'babel-polyfill', 'tf-jq-spa'],
            // css: ['./vendor/a.css', './vendor/b.css'], // 假设这里是一些框架或组件css, 比如: bootstrap.css, 全局的css, 组件的css
            // js: ['./vendor/a.js', './vendor/b.js'], // 假设这里是一些框架或组件js, 比如: bootstrap.js和一些组件js
            
            iePolyfill: [
                './vendor/ie_polyfill/es5_safe.min.js',
                './vendor/ie_polyfill/html5shiv.min.js',
                './vendor/ie_polyfill/json.min.js',
                './vendor/ie_polyfill/respond.min.js',
                './vendor/ie_polyfill/placeholder.js'
            ]
        }
    },

}