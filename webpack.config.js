const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function build() {

    const config = {
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: '/'
        },
        devServer: {
            allowedHosts: 'all',
            compress: true,
            port: 5000,
            static: {
                directory: path.join(__dirname, 'public')
            }
        },
        devtool: 'source-map',
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }]
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: (resourcePath, resourceQuery) => {
                                if (process.env.NODE_ENV === 'development') return '[path][name].[ext]';
                                return 'images/[hash]-[name].[ext]';
                            }
                        }
                    },
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "index.html"
            })
        ],
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            extensions: ['.js', '.json', '.ts', '.tsx', '.png', '.tff'],
            alias: {
                react: path.join(__dirname, 'node_modules', 'react'),
                '@app': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@ds': path.resolve(__dirname, 'src/components/DesignSystem'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@services': path.resolve(__dirname, 'src/services'),
                '@config': path.resolve(__dirname, 'config'),
                '@constants': path.resolve(__dirname, 'config/constants'),
                '@types': path.resolve(__dirname, 'config/types'),
            }
        }
    }

    return config

}