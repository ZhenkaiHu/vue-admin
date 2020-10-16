module.exports = {
    publicPath: '/', //基本路径
	//publicPath: process.env.NODE_ENV !== 'production' ? process.env.VUE_APP_URL : '/', //基本路径
	outputDir: 'dist',  //生产环境构建输出目录
	//outputDir: process.env.VUE_APP_outputDir  
	assetsDir: '',      //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	lintOnSave: false, // 是否开启eslint在保存的时候检查 ，false不开启
	devServer: {
	   open: true,      // 启动服务后是否自动打开浏览器，true-每次启动都会打开新的
	   host: '0.0.0.0', // 允许外部ip访问
           port: 8081,      // 端口
           https: false,    // 是否启用https
        },
	//判断不同环境下使用不同配置
	configureWebpack: config =>{
	   if (process.env.NODE_ENV === "development") {
		config.devtool = 'source-map';
	    } else if (process.env.NODE_ENV === "production") {
			config.devtool = "eval-source-map";
	    }
    },
    //css相关配置
    css: {
        extract: true,      // 是否使用css分离插件 ExtractTextPlugin。Default: 生产环境下是 true，开发环境下是 false
        sourceMap: false,   // 开启 CSS source maps?
        requireModuleExtension: false,      //是否开启css-modules模式, 默认值为flase
        loaderOptions: {
            // css: {
            //     // 这里的选项会传递给 css-loader
            // }, 
            // postcss: {
            //     // 这里的选项会传递给 postcss-loader
            // },
            // // css预设器配置项
            sass: {
                // @/ 是 src/ 的别名
                prependData: `@import "/src/styles/main.css";`  // 向所有 Sass 样式传入共享的全局变量
            }
        }
    }
}