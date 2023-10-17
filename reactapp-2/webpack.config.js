let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'),

webpackConfig = {
    output: {
        path: path.join(__dirname, '/dist'), // dist - distribution folder - created by this line
        filename: 'index.bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 9092,  // which port will host devServer
        historyApiFallback : true  // html5 api. this is like * page in express - whenever request comes, just return index.html.  //localhost:9092/user
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,     // check all files with .js or .jsx and apply babel-loader
                exclude: /nodeModules/,  // but exclude /nodeModules folder
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,          // for .css, apply style-loader and css-loader 
                use: ['style-loader', 'css-loader']
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,  // for static files
            type: 'asset/resource',
            }
        ]
    },
    // whenever request comes to the port, respond with html - the only html in entire react app
    // All other html codes, we'll create through react
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],

    cache: false  // added to debug changes not being updated even on refreshing chrome
}

module.exports = webpackConfig;
