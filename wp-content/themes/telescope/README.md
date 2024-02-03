# repo de base : https://github.com/wp-strap/wordpress-webpack-workflow

# Quickstart

## 1-- Cloner ou download la repo dans wp-content/themes

## 2 -- $ yarn install

## 3-- Edit the BrowserSync settings in `webpack.config.js` if you want to use it

Au besoin, changement des propriétés:

- host
- port
- mode
- sevrer
- proxy

## 4-- Choose theme in BO Wordpress

## 5-- Start your npm build workflow with one of these commands:

```bash
$ yarn dev
$ yarn watch
$ yarn build
```

# Theme.json

Source :

- https://fullstackdigital.io/blog/split-theme-json-into-multiple-files-with-wordpress/

## Folder theme-json

Contient des fichiers pour chaque partie du theme.json :

- config
- settings
- styles

Contient un fichier compile.js qui se chargera de générer le theme.json

## Pour créer le fichier theme.json

```bash
$ yarn json-theme
```

## Watcher le theme.json

```bash
$ yarn watch:json-theme
```

---

# Features & benefits

**Ajouts dossiers/fichiers Wordpress**

> - index.php
> - style.css (à compléter)
> - header.php
> - footer.php
> - 404.php
> - functions.php
> - dossier functions avec fichier enqueue.php
> - dossier parts pour les partials

**Ajouts Webpack**

https://ideas.byteridge.com/webpack-bundle-your-frontend-apps/
https://ideas.byteridge.com/webpack-minifying-your-production-bundle/

> - [**clean-webpack-plugin**](https://github.com/johnagan/clean-webpack-plugin) qui permet de supprimer tous les fichiers dans le outpath du build à chaque build (dev ou prod)
> - [**Minification CSS en prod par optimize-css-assets-webpack-plugin**](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
> - [**Minification JS en prod par TerserWebpackPlugin**](https://webpack.js.org/plugins/terser-webpack-plugin/)

Configuration différente pour le css compilé en dev et prod:

> - $ yarn dev: sortie du scss avec le loder [**style-loader**](https://webpack.js.org/loaders/style-loader/) => le css est directement injecté dans le DOM (apparemment gain de temps lors du build)
> - $ yarn prod: sortie du scss avec plugin [**mini-css-extract-plugin**](https://webpack.js.org/plugins/mini-css-extract-plugin/) => css contenu dans des fichiers séparés

Prise en charge des fonts (src/fonts) pour le build (dev et prod) du coup différente

Choix d'ajouter un [contenthash] (versionnage du css et js) pour la gestion du cache

> - pas de versionning
> - versionning 'dev'
> - versionning 'dev-prod'
> - versionning 'prod'

> - Utilisation du plugin [**webpack-assets-manifest**](https://www.npmjs.com/package/webpack-assets-manifest) pour générer un fichier JSON des fichiers de sortie du build

Rajout d'une fonction dans functions/enqueue-assets.php pour gérer les changements de versions
https://danielshaw.co.nz/wordpress-cache-busting-json-hash-map/

Ajout/configuration splitChunk d'un fichier critical.css bundlé à part, destiné à séparer le css au-dessus de la ligne critique (généralement pour header et hero).

**Styling (CSS)**

> - **Minification** in production mode handled by Webpack
> - [**PostCSS**](http://postcss.org/) for handy tools during post CSS transformation using Webpack's [**PostCSS-loader**](https://webpack.js.org/loaders/postcss-loader/)
> - **Auto-prefixing** using PostCSS's [**autoprefixer**](https://github.com/postcss/autoprefixer) to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/). It is [recommended](https://developers.google.com/web/tools/setup/setup-buildtools#dont_trip_up_with_vendor_prefixes) by Google and used in Twitter and Alibaba.
> - [**PurgeCSS**](https://github.com/FullHuman/purgecss) which scans your php (template) files to remove unused selectors from your css when in production mode, resulting in smaller css files.
> - **Sourcemaps** generation for debugging purposes with [various styles of source mapping](https://webpack.js.org/configuration/devtool/) handled by WebPack
> - [**Stylelint**](https://stylelint.io/) that helps you avoid errors and enforce conventions in your styles. It includes a [linting tool for Sass](https://github.com/kristerkari/stylelint-scss).

**Styling when using PostCSS-only**

> - Includes [**postcss-import**](https://github.com/postcss/postcss-import) to consume local files, node modules or web_modules with the @import statement
> - Includes [**postcss-import-ext-glob**](https://github.com/dimitrinicolas/postcss-import-ext-glob) that extends postcss-import path resolver to allow glob usage as a path
> - Includes [**postcss-nested**](https://github.com/postcss/postcss-nested) to unwrap nested rules like how Sass does it.
> - Includes [**postcss-nested-ancestors**](https://github.com/toomuchdesign/postcss-nested-ancestors) that introduces ^& selector which let you reference any parent ancestor selector with an easy and customizable interface
> - Includes [**postcss-advanced-variables**](https://github.com/jonathantneal/postcss-advanced-variables) that lets you use Sass-like variables, conditionals, and iterators in CSS.

**Styling when using Sass+PostCSS**

> - **Sass to CSS conversion** using Webpack's [**sass-loader**](https://webpack.js.org/loaders/sass-loader/)
> - Includes [**Sass magic importer**](https://github.com/maoberlehner/node-sass-magic-importer) to do lot of fancy things with Sass @import statements

**JavaScript**

> - [**BabelJS**](https://babeljs.io/) Webpack loader to use next generation Javascript with a **BabelJS Configuration file**
> - **Minification** in production mode
> - [**Code Splitting**](https://webpack.js.org/guides/code-splitting/), being able to structure JavaScript code into modules & bundles
> - **Sourcemaps** generation for debugging purposes with [various styles of source mapping](https://webpack.js.org/configuration/devtool/) handled by WebPack
> - [**ESLint**](https://eslint.org/) find and fix problems in your JavaScript code with a **linting configuration** including configurations and custom rules for WordPress development.
> - [**Prettier**](https://prettier.io/) for automatic JavaScript / TypeScript code **formatting**

**Images**

> - [**ImageMinimizerWebpackPlugin**](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/) + [**CopyWebpackPlugin**](https://webpack.js.org/plugins/copy-webpack-plugin/)

    to optimize (compress) all images using

> - _File types: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`_

**Translation**

> - [**WP-Pot**](https://github.com/wp-pot/wp-pot-cli) scans all the files and generates `.pot` file automatically for i18n and l10n

**BrowserSync, Watcher & WebpackBar**

> - [**Watch Mode**](https://webpack.js.org/guides/development/#using-watch-mode), watches for changes in files to recompile
> - _File types: `.css`, `.html`, `.php`, `.js`_
> - [**BrowserSync**](https://browsersync.io/), synchronising browsers, URLs, interactions and code changes across devices and automatically refreshes all the browsers on all devices on changes
> - [**WebPackBar**](https://github.com/nuxt/webpackbar) so you can get a real progress bar while development which also includes a **profiler**

**Configuration**

> - All configuration files `.prettierrc.js`, `.eslintrc.js`, `.stylelintrc.js`, `babel.config.js`, `postcss.config.js` are organised in a single folder
> - The Webpack configuration is divided into 2 environmental config files for the development and production build/environment

## Requirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## What to configure

1. Edit the translate script in package.json with your project data
   - If you use `npx wp-strap webpack` to get the files then this will be done automatically with you terminal input
2. Edit the BrowserSync settings in `webpack.config.js` which applies to your local/server environment
   - You can also disable BrowserSync, Eslint & Stylelint in `webpack.config.js`
3. The workflow is ready to start, you may want to configure the files in `/webpack/` and `webpack.config.js` to better
   suite your needs

### Work with Sass+PostCSS or PostCSS-only

In `webpack.config.js` you can choose to work with Sass, and use PostCSS only for the autoprefixer function or go full PostCSS (without sass); In that case `sass` needs to be configured to `postcss`.

```js
projectCss: {
  use: "sass"; // sass || postcss
}
```

This gets automatically configured when using the initial setup with `npx wp-strap webpack`.

Working with PostCSS-only is beneficial when you work with TailwindCSS for example. You can read more about that here: https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor. Using TailwindCSS as a utility-first css framework is great for tons of reasons, but I do believe there are projects where you're better off using Sass(+Bootstrap), though it's a personal preference; therefore I left the ability to change between `Sass+PostCSS` or `PostCSS-only`.

When changing this configuration after the `npx wp-strap webpack` setup, then you also need to change the import rule in `assets/src/js/frontend.js` & `assets/src/js/backend.js` to import a `.css` or `.pcss` file instead of a `.scss` file.

```js
// Change
import "../sass/frontend.scss";
// To
import "../postcss/frontend.pcss";
```

## Developing Locally

To work on the project locally (with Eslint, Stylelint & Prettier active), run:

```bash
yarn dev
```

Or run with watcher & browserSync

```bash
yarn dev:watch
```

This will open a browser, watch all files (php, scss, js, etc) and reload the browser when you press save.

## Building for Production

To create an optimized production build (purged with PurgeCSS & fully minified CSS & JS files), run:

```bash
yarn prod
```

Or run with watcher & browserSync

```bash
yarn prod:watch
```

## More Scripts/Tasks

```bash
# To scan for text-domain functions and generate WP POT translation file
yarn translate

# To find problems in your JavaScript code
yarn eslint

# To find fix problems in your JavaScript code
yarn eslint:fix

# To find problems in your sass/css code
yarn stylelint

# To find fix problems in your sass/css code
yarn stylelint:fix

# To make sure files in assets/src/js are formatted
yarn prettier

# To fix and format the js files in assets/src/js
yarn prettier:fix
```
