const path=require('path');
module.exports={
    mode:'development',
    entry: ['./src/style/style.less', './src/videoControl.ts'],
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader'
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpg|gif|woff)$/i,
                use: ['url-loader'],
            },
        ]
    },
    resolve:{
        extensions:['.js','.ts']
    },
    devServer:{
        openPage:'/index.html'
    }
};