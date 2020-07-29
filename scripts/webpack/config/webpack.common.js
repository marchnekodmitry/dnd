// Core
import merge from 'webpack-merge';

// Instruments
import { BUILD, CHUNK_NAME_JS, SOURCE } from '../constants';
import {
    loadTypeScript,
    loadFonts,
    connectHtml,
    connectTypeChecking,
    loadImages,
    loadSvg,
    defineEnvVariables,
    defineTsconfigPaths,
} from '../modules';

export default () => {
    const { NODE_ENV } = process.env;
    const IS_DEVELOPMENT = NODE_ENV === 'development';

    return merge(
        {
            output: {
                path: BUILD,
                filename: IS_DEVELOPMENT ? '[name].js' : `js/entry~${CHUNK_NAME_JS}`,
                chunkFilename: IS_DEVELOPMENT ? '[name].js' : `js/chunk~${CHUNK_NAME_JS}`,
                hashDigestLength: 5,
                publicPath: '/',
            },
            resolve: {
                modules: [SOURCE, 'node_modules'],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
        connectHtml(),
        loadTypeScript(),
        connectTypeChecking(),
        loadFonts(),
        loadImages(),
        loadSvg(),
        defineEnvVariables({
            NODE_ENV,
            __ENV__: JSON.stringify(NODE_ENV),
            __DEV__: NODE_ENV === 'development',
            __PROD__: NODE_ENV === 'production',
        }),
        defineTsconfigPaths(),
    );
};
