const path = require("path");

// css extraction and minification
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// minify js
const TerserPlugin = require("terser-webpack-plugin");
// clean out build dir in-between builds
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// permet de généré un fihier JSON surtout pour css + js avec [contenthash]
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CopyPlugin = require("copy-webpack-plugin"); // For WordPress we need to copy images from src to public to optimize them

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = [
  {
    entry: {
      main: ["./assets/js/main.js"],
      backend: ["./assets/js/backend.js"],
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      filename: "js/[name].min.[fullhash].js",
    },
    devtool: "source-map",
    module: {
      rules: [
        // js babelization
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // sass compilation
        {
          test: /\.(sass|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        // loader for webfonts (only required if loading custom fonts)
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
        // loader for images and icons (only required if css references image files)
        {
          test: /\.(png|jpg|gif)$/,
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]",
          },
        },
      ],
    },
    plugins: [
      // clear out build directories on each build
      new CleanWebpackPlugin({
        // cleanOnceBeforeBuildPatterns: ["./dist/js/*", "./dist/css/*"],
      }),
      // css extraction into dedicated file
      new MiniCssExtractPlugin({
        filename: "css/[name].min.[fullhash].css",
      }),
      new WebpackAssetsManifest(),
      new CopyPlugin({
        // Copies images from src to public
        patterns: [{ from: "./assets/images", to: "images" }],
      }),
      new BrowserSyncPlugin({
        host: "localhost",
        port: 8080,
        // mode:   'proxy', // proxy | server
        // server: { baseDir: [ 'public' ] }, // can be ignored if using proxy
        proxy: "localhost/bsa-web",
        // BrowserSync will automatically watch for changes to any files connected to our entry,
        // including both JS and Sass files. We can use this property to tell BrowserSync to watch
        // for other types of files, in this case PHP files, in our project.
        files: "**/**/**.php",
        // reload: true, // Set false to prevent BrowserSync from reloading and let Webpack Dev Server take care of this
      }),
    ],
    optimization: {
      // minification - only performed when mode = production
      minimize: true,
      minimizer: [
        // js minification - special syntax enabling webpack 5 default terser-webpack-plugin
        new TerserPlugin({
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          parallel: true,
        }),
        // css minification
        new CssMinimizerPlugin(),
      ],
    },
  },
];
