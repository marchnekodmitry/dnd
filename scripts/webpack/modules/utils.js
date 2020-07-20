// Core
import { resolve } from 'path';
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

// Instruments
import { PROJECT_ROOT, STATIC, BUILD, SOURCE } from '../constants';

export const cleanBuildDirectory = () => ({
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: PROJECT_ROOT,
        }),
    ],
});

export const defineEnvVariables = (variables = {}) => ({
    plugins: [new DefinePlugin(variables)],
});

export const defineTsconfigPaths = () => ({
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: resolve(PROJECT_ROOT, './tsconfig.json'),
            }),
        ],
    },
});

export const connectBuildAnalysis = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            openAnalyzer: false,
            generateStatsFile: true,
        }),
    ],
});

export const connectStaticServing = () => ({
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${STATIC}/CD/package.json`,
                    to: `${BUILD}/package.json`,
                },
            ],
        }),
    ],
});

export const connectFriendlyErrors = () => ({
    plugins: [new FriendlyErrorsWebpackPlugin()],
});

export const connectTypeChecking = () => ({
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: `${SOURCE}/**/*.{ts,tsx,jsx,jsx}`,
            },
        }),
    ],
});
