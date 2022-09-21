import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const ScssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }

    return [typeScriptLoader, ScssLoader]
}