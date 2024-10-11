## This is a template for custom shopify theme:
|                              | 					                                                                                               |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| **Platform** 		              | Shopify 		                                                                                          |
| **Shopify CLI 3.0+** 		      | [Shopify CLI documentation and commands](https://shopify.dev/docs/themes/tools/cli/commands)	    		 |
| **pnpm** 		                  | [pnpm](https://pnpm.io/installation)	    		                                                         |
| **Development environment:** | [store](storeUrl)    			                                                                            |


# Before start project you should install [pnpm](https://pnpm.io/installation)
1. pnpm Cli [commands](https://pnpm.io/cli/install)
Basics commands:
- pnpm i - install dependency
- pnpm add <pkg> - add new pkg ( -D to devDependencies )
- pnpm run [scripts from pkg](https://pnpm.io/cli/run)
- pnpm start - run start scripts
- pnpm remove <pkg> - remove package

# How to start
1. In the root or project directory run **pnpm install**. Install dependencies with [pnpm](https://pnpm.io/cli/install)
```shell
pnpm install
```
2. Configure shopify.theme.toml file using [example.shopify.theme.toml](example.shopify.theme.toml).
You access multiple stores using [Theme Access](https://shopify.dev/docs/themes/tools/theme-access) passwords.
```toml
[environments.dev]
    theme = "123456789012"
    store = "my-store"
    password  = "shptka_123456"
```

3. For watching changes with webpack **pnpm start**
```shell
pnpm run start
```
4. Also for sync changes with shopify theme run in parallel in another terminal tab
```shell
pnpm run shopify:dev:sync
```
5. Your are awesome, have fun!
6. **After completion of work and before commit** run prettier:project, run lint:liquid and run lint:scss

## ======= Project work information =======
1. **Main styles** - project styles are located in the src/style folder - base.scss -> base.bf.build.css
`! didn't edit css in assets, edit only scss files from src/styles`
- In **base-root-variables** you create global CSS variables (that's for settings from the store), important with the flag [global] for the project style.
	Adding font from global theme settings if exist.
- In base.scss, at the top of the file you will add CSS variables(without [global] flag) with local scope and try to use them in all scss files.
	Also includes files from the folder global and header.
- In the folder global you could edit typography, modals, and all other file and styles that you need.
- Separate styles file - if you need styles in a separate file, you can plug them into main.js. For example:
`import '@/styles/base/base.scss';`
2. **Main JavaScript** files - The main JavaScript files are located in the assets folder.
- They are organized one by one. Additionally, there is a global.js file that contains code for the entire project.
- **base-footer-scripts** - his includes footer scripts, such as window.routes (example).
3. **base-svg-sprites** - In this file, we add SVG icons. Here's an example of usage:
	 `{%- render 'base-svg-sprites', icon: 'icon-success' -%}`
4. **Country select** - example, in the footer section.

### How to build bundles(minify css and js) before deploy changes?
1. In root directory run **pnpm run deploy** it will build js and css bundles and deploy changes to theme that you add in config
```shell
pnpm run deploy
```

## ======= Basic commands from package Scripts =======
- `pnpm run start` – watching changes with webpack
- `pnpm run build` – build webpack
- `pnpm run deploy` – build and deploy files to Shopify to theme which you add in shopify.theme.toml
- `pnpm run shopify:dev` – connect to shopify store from **config** (shopify.theme.toml)
- `pnpm run shopify:dev:sync` – connect to shopify store from **config** (shopify.theme.toml) and sync store data
,watch changes in shopify folder and deploy to store(you didn't need run deploy command)
- `pnpm run shopify:pull` – pulling changes from theme
- `pnpm run shopify:push` – pushing changes to theme
- `pnpm run prettier:project` – prettier all files
- `lint:liquid` – check liquid and show errors at the terminal [shopify theme check](https://shopify.dev/docs/api/shopify-cli/theme/theme-check)
- `lint:scss` – check scss and show errors at the terminal

# ======= Shopify CLI Information =======
## Configure shopify.theme.toml file using [example.shopify.theme.toml](example.shopify.theme.toml).
You access multiple stores using [Theme Access](https://shopify.dev/docs/themes/tools/theme-access) passwords.
```toml
[environments.dev]
  theme = "123456789012"
  store = "my-store"
  password  = "shptka_123456"
  ignore = ["config/settings_data.json", "settings_data.json"]
```
We can also ignore files with - .shopifyignore (need add files that you didn't want to upload to theme)

## Basic commands and flags, all commands you can read in [Shopify CLI 3.0+ dox](https://shopify.dev/docs/themes/tools/cli/commands)
- **--environments or -e**
> The [environment](https://shopify.dev/docs/themes/tools/cli/environments) that you want to use.
- **--store or -s**
> The development store that you want to use to preview your theme.
- **--theme or -t**
> The ID or name of the theme that you want to preview. If you don't use this flag, then the theme is previewed using a new or existing development theme.
- **--theme-editor-sync**
> Enables two-way sync for theme JSON files. When this option is enabled, changes made in the [theme editor](https://shopify.dev/docs/themes/tools/online-editor) in the Shopify admin are applied to the local copy of the theme.

- `shopify auth logout` – Logs you out of the Shopify account or Partner account. !! If you before log in without environments flag
- `shopify theme pull -e dev` - login to your store by environments.dev config and download theme
- `shopify theme dev -e dev --theme-editor-sync` – connect by environments.dev config for develop
- `shopify theme push -e dev ` – connect by environments.dev config and upload all changes to store

Other commands
- `shopify theme check` – Analyze your theme code for errors
- `shopify theme package` – Packages your local theme files into a ZIP file that can be uploaded to Shopify
- `shopify theme info` – Displays information about your theme environment, including your current store.
- `shopify help` – Lists the available commands and describes what they do.
- `shopify dev -h` – Lists the available dev commands and describes what they do.
- `shopify upgrade` – Lists the available dev commands and describes what they do.

## ======= Project structure =======
```
    ┌── assets/			# Contains all static theme assets, e.g. fonts, images etc
    ├── config/			# Contains settings_schema.json file
    ├── layout/			# Contains theme layout files
    ├── locales/ 		# Contains locale files for translated content
    ├── sections/ 		# Contains theme sections
    ├── snippets/ 		# Contains theme snippets and icons
    ├── src/
        ├── styles/   # Contains theme SCSS
            ├── common/   # Used for base styles, e.g. reset, mixins, typography, vars, fonts etc
            ├── component/      # Used for component
            ├── global/   # Used for global element
            ├── header/   # Used for header
            ├── blocks/   # Used for blocks styles
            ├── snippets/   # Used for snippets styles
            ├── libs/   # Used for libraries' styles assets, e.g. slick or select2
            ├── mixins/   # Used for SCSS mixins
            ├── sections/   # Used for sections styles
            ├── templates/    # Used for general template styles
            ├── ui/   # Used for global UI components styles
            └── base.scss   # Main styles file for import
        ├── js/   # Contains all JavaScript files can create structure as you wish
            ├── sections/   # Section js files
            └── other   # Other js files
        └── main.js   # Main js
    ├── templates/    # Contains theme JSON and Liquid templates
        └── customers/    # Contains customer templates
    ├── .editorconfig       # Helps maintain consistent coding styles
    ├── .gitignore          # Used for ignore file to not upload repository
    ├── .gitlab-ci.yml 	    #
    ├── .prettierignore     # Prettier ignore
    ├── .prettierrc.json    # Prettier config and settings
    ├── .shopifyignore      # Used for ignore file to not upload to the theme
    ├── .theme-check.yml    # Theme check config and settings
    ├── example.shopify.theme.toml      # Used for configure connection to shopify
    ├── jsconfig.json       # Used for configure JS
    ├── package.json 	    # Mane package file, here saved project dependency, scripts for running , project info
    ├── pnpm-lock.yaml      # Main package file, here saved lock dependency
    ├── postcss.config.js   # Used for configure postcss
    ├── README.md 	    # Informatio which help work with project
    ├── shopify.theme.toml  # Main config file based on Shopify CLI configuration
    ├── stylelint.config.js # Stylelint config
    ├── translation.yml     # Informatio which help work with project
    ├── webpack.common.js   # webpack common file
    ├── webpack.dev.js      # webpack dev file
    └── webpack.prod.js     # webpack prod file
```
