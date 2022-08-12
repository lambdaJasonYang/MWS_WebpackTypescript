Changes from vanilla webpack branch

* Added webpack.config.js
* In package.json: `"build": "webpack --mode production"` --> `"build": "webpack"` 
* Added scss styles *.scss

# MWS - Webpack, Typescript with Config

This is a Minimal Working Sample of webpack, typescript, and external node_modules:  

We NEED to install webpack to use npm installed external node_modules on the browser and in our sample we use `sigma, graphology`.

* /myproject
  * package.json
  * tsconfig.json
  * node_modules/
    * graphology/
    * sigma/
  * dist/
    * index.html
  * src/
    * styles/
      * style.scss
    * index.ts
    * mystuff.ts
<!--  -->
* /myproject/dist: our output folder holding our generated static files. 
  * Webpack will compile a `/myproject/dist/main.js` file on build . 
  * We will need to make our own `index.html` in this folder that uses `main.js`  
* /myproject/src: our source folder. 
  * This is NOT where we run npm init. 
  * It does NOT hold our `package.json` 
  * It does NOT hold any npm node_modules. 
  * It does hold our custom written module and our main source code. 


```bash
mkdir myproject
mkdir src
mkdir dist
touch /myproject/dist/index.html

cd myproject
npm init

npm install --save-dev typescript
npm install --save-dev webpack webpack-cli
npm install sigma graphology
```

Then make a index.html: 

./myproject/dist/index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>hi</title>

</head>
<body>
    <script type="module" defer src="main.js"></script>
    <div id="sigma-container" style="height: 50vh;width: 70vw;"></div>
<h1>hi</h1>
</body>
</html>
```

tsconfig.json
```{.json filename = tsconfig.json}
{
    "compilerOptions": {
      "target": "ES2015",
      "module": "es2022",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "moduleResolution": "node",
      "forceConsistentCasingInFileNames": true,
      "strictPropertyInitialization": false
    },
    "$schema": "https://json.schemastore.org/tsconfig",
    "display": "Recommended"
  }
```

package.json
```json
...
  "scripts": {
    "tsc": "tsc",
    "build": "webpack",
  },
```

# Styles


```bash
npm install --save-dev sass
```

In non-webpack projects, we can get away with just installing sass but  
with webpack we need the loaders as well which we will link in the `webpack.config.js`

```bash
npm install --save-dev style-loader css-loader sass-loader
```

# webpack.config.js

```js
const path = require('path');

//commonJS syntax

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i, //regex to detect sass file
            use: ['style-loader','css-loader','sass-loader']
        }]
    }
}
```



# To build

```bash
cd myproject
npm run tsc
npm run build
```
 
