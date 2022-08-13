# MWS - Webpack, Typescript

This is a Minimal Working Sample of webpack, typescript, and external node_modules:  

We NEED to install webpack to use npm installed external node_modules on the browser and in our sample we use `sigma, graphology`.

* /myproject
  * package.json
  * tsconfig.json
  * custom.d.ts
  * node_modules/
    * graphology/
    * sigma/
  * dist/
    * index.html
    * bleh8347oawdudjwao.js
    * smiley.svg
  * src/
    * styles/
      * main.sass
    * assets/
      * smiley.svg
    * index.ts
    * mystuff.ts
    * template.html
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
touch /myproject/src/template.html
touch /myproject/index.ts

cd myproject
npm init

npm install --save-dev typescript
npm install --save-dev webpack webpack-cli
npm install sigma graphology
```

```bash
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-dev-server
```

```bash
npm install --save-dev sass
npm install --save-devcss-loader style-loader sass-loader
```

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env
#for backward compatability with old browsers
```

# Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img id="somePic"/>
    <h1>Hi </h1>
    <p><%= htmlWebpackPlugin.options.bleh %></p>
    <div id="sigma-container" style="height: 50vh;width: 70vw;"></div>
</body>
</html>
```

# tsconfig


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
      "sourceMap": true,
      "forceConsistentCasingInFileNames": true,
      "strictPropertyInitialization": false,

      
    },
    "exclude": ["node_modules"],
    "include" : ["src"], 
    "files": [  
      "custom.d.ts" //this is important otherwise TS cant detect this
      ],
    "$schema": "https://json.schemastore.org/tsconfig",
    "display": "Recommended",
    
  }
```

* `include` mean include directory, while `files` is individual files in tsconfig.json




# Assets

* Now only do you need to modify webpack to use an asset-loader, you also have to configure Typescript's `tsconfig.json` to detect assets as valid types.

## Typescript 

custom.d.ts

```ts
declare module '*.svg' {
    const content: any;
    export default content;
}
```


## Webpack

* In `webpack.config.js` you need to add it as a module rule.

```js
output: {
  ...,
  assetModuleFilename: '[name][ext]'
},
...
module: {
  rules: [...,
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
            ]

        }
```


# package.json

```json
...
  "scripts": {
    "tsc": "tsc",
    "build": "webpack",
    "dev": "webpack serve",
  },
```


# To build

```bash
cd myproject
npm run build
```

After building you can take the `dist` directory anywhere and it can run independently from the `src`.
 
