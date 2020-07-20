module.exports = (api) => {
    const env = api.env();
    //  api.cache.using(() => env === 'development');

    api.cache.never();

    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
    ];

    if (env === 'development') {
        plugins.push('react-hot-loader/babel');
    }

    return {
        presets: [
            '@babel/preset-typescript',
            '@babel/preset-react',
            [
                '@babel/preset-env',
                {
                    spec: true,
                    loose: false,
                    debug: false,
                    modules: false,
                },
            ],
        ],
        plugins,
    };
};
