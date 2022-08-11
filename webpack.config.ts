// @ts-check
import { Configuration } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import 'webpack-dev-server'

const devConfig: Pick<Configuration, 'devServer'> = {
    devServer: {
        allowedHosts: 'all',
        compress: true,
        port: 5000,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'static'),
        },
    },
}

const optimizationConfig: Pick<Configuration, 'optimization'> = {
    optimization: {
        splitChunks: {
            chunks: 'async',
            minChunks: 1,
            minSize: 0,
            maxInitialRequests: Infinity,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                designSystem: {
                    test: /[\\/]src[\\/]components[\\/]DesignSystem[\\/]index.tsx/,
                    priority: -10,
                    name: () => {
                        return `_ds_full_`
                    },
                },
                pages: {
                    test: /[\\/]src[\\/]pages[\\/][A-z]*[\\/]index.tsx/,
                    priority: -5,
                    name: (module: any) => {
                        const modulePath = module.identifier()
                        const pageNameWithSuffix: string = modulePath
                            .split('\\')
                            .reverse()[1]
                        return pageNameWithSuffix
                    },
                },
                main: {
                    minChunks: 2,
                    priority: -30,
                    reuseExistingChunk: true,
                },
            },
        },
    },
}

module.exports = function build() {
    const config: Configuration = {
        ...devConfig,
        ...optimizationConfig,
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: '/',
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true,
                            },
                        },
                    ],
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
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: () => {
                                if (process.env.NODE_ENV === 'development')
                                    return '[path][name].[ext]'
                                return 'images/[hash]-[name].[ext]'
                            },
                        },
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            }),
        ],
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            extensions: ['.js', '.json', '.ts', '.tsx', '.png', '.tff'],
            alias: {
                react: path.join(__dirname, 'node_modules', 'react'),
                '@app': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@ds': path.resolve(
                    __dirname,
                    'src/components/DesignSystem/index'
                ),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@services': path.resolve(__dirname, 'src/services'),
                '@config': path.resolve(__dirname, 'config'),
                '@constants': path.resolve(__dirname, 'config/constants'),
                '@types': path.resolve(__dirname, 'config/types'),
            },
        },
    }

    return config
}
