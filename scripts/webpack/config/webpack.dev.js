// Core
import merge from 'webpack-merge';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

// Instruments
import { SOURCE, HOST, PORT } from '../constants';
import getCommonConfig from './webpack.common';
import { loadDevCss, connectFriendlyErrors } from '../modules';

export default async () => {
    const suggestedPort = await choosePort(HOST, PORT);

    return merge(
        getCommonConfig(),
        {
            mode: 'development',
            entry: [SOURCE],
            devServer: {
                host: HOST,
                port: suggestedPort,
            },
            devtool: 'cheap-module-eval-source-map',
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
        },
        loadDevCss(),
        connectFriendlyErrors(),
    );
};
