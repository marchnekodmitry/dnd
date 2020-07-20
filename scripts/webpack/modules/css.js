// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Instruments
import { CHUNK_NAME_CSS } from '../constants';

export const loadDevCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
});

export const loadProdCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/${CHUNK_NAME_CSS}`,
            chunkFilename: `css/${CHUNK_NAME_CSS}`,
        }),
    ],
});
