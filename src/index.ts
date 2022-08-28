import Graph from 'graphology';
import Sigma from 'sigma';
//with node_modules we dont need to write out the path, just the name of the package

import './styles/main.scss'
import Fig3 from './assets/smiley.svg'; //Add svg type to custom.d.ts for this import to work

import hello from './mystuff'; //shorthand for mystuff.ts
//Our own(not from node_modules) js code uses relative path meaning 
//we have to write `./someJslib` instead of just `someJslib`

//Notice even though the function name is `sayhello` from `export default sayhello;` in `mystuff.js`
//we are allowed to rename the import as `hello`


import data from "./assets/data.json"; //`Add "resolveJsonModule": true` in tsconfig.json for this import to work



document.querySelector("h1")!.innerText = hello("Bob");
const somePicHTML:HTMLImageElement = document.querySelector("#somePic")!
somePicHTML.src = Fig3;

const randNum = () => {
  return Math.floor(Math.random() * (10-0+1))
}


// First graph - adding node manually

const graph = new Graph();

graph.addNode("Home", { x: randNum(), y: randNum(), size: 5, label: "HomedAd", color: "purple",URL : "/#" });
graph.addNode("Programming", { x: randNum(), y: randNum(), size: 5, label: "Prog", color: "red", URL: "/tags/prog.html" });
graph.addEdge("Home","Programming");

const container : (HTMLElement | null) = document.getElementById("sigma-container");
const settingsSigma = {
    labelRenderedSizeThreshold: 1,
  }

const renderer = new Sigma(graph,container!,settingsSigma);
//the ! in `container!` asserts that `container` is non-null (this stops the IDE warnings)


//2nd Graph - importing nodes with json

const graph2 = new Graph();



graph2.import(data)

const container2 : (HTMLElement | null) = document.getElementById("sigma-container2");
const settingsSigma2 = {
    labelRenderedSizeThreshold: 1,
  }

const renderer2 = new Sigma(graph2,container2!,settingsSigma2);