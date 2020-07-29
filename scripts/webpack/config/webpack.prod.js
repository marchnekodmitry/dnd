// Core
import merge from 'webpack-merge';

// Instruments
import { SOURCE } from '../constants';
import getCommonConfig from './webpack.common';
import {
    cleanBuildDirectory,
    connectBuildAnalysis,
    optimizeModules,
    loadProdCss,
    optimizeImages,
    connectStaticServing,
} from '../modules';

export default () => {
    const { ANALYZE } = process.env;

    return merge(
        getCommonConfig(),
        {
            mode: 'production',
            entry: SOURCE,
            devtool: false,
        },
        cleanBuildDirectory(),
        optimizeModules(),
        loadProdCss(),
        optimizeImages(),
        connectStaticServing(),
        ANALYZE && connectBuildAnalysis(),
    );
};
