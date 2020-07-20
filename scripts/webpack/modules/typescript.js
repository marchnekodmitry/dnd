export const loadTypeScript = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            compact: false,
                        },
                    },
                },
            ],
        },
    };
};
