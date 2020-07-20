// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Instruments
import { STATIC, CHUNK_NAME_ASSET } from '../constants';

export const loadImages = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `images/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
        ],
    },
});

export const loadSvg = () => ({
    module: {
        rules: [
            {
                test: /\.svg$/,
                issuer: {
                    test: /\.(ts|js)x?$/,
                },
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            dimensions: false,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                issuer: {
                    test: /\.css$/,
                },
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `images/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
        ],
    },
});

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test: /\.woff2?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `fonts/${CHUNK_NAME_ASSET}`,
                        },
                    },
                ],
            },
        ],
    },
});

export const connectHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React boilerplate',
            template: `${STATIC}/template.html`,
            favicon: `${STATIC}/favicon.ico`,
        }),
    ],
});
