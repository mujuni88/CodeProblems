module.exports = {
    test: function (config) {
        return {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { 
                        test: /\.js$/,  
                        loader: 'babel-loader', 
                        query: {
                            presets: ['es2015']
                        },
                        exclude: /node_modules/
                    }
                ]
            }
        };
    }
}