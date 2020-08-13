module.exports ={
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /nodemodules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}