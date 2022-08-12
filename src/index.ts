
import Graph from 'graphology';
import Sigma from 'sigma';
//with node_modules we dont need to write out the path, just the name of the package

import './styles/main.scss'

import hello from './mystuff'; 
//Notice our own js code(not from node_modules) uses relative path and we can omit the `.js` 

//Notice even though the function name is `sayhello` from `export default sayhello;` in `mystuff.js`
  //we are allowed to rename the import as `hello`

document.querySelector("h1")!.innerText = hello("Bob");

const graph = new Graph();

graph.addNode("Home", { x: 0, y: 0, size: 5, label: "Home", color: "blue",URL : "/#" });
graph.addNode("Programming", { x: 1, y: -1, size: 5, label: "Prog", color: "red", URL: "/tags/prog.html" });
graph.addEdge("Home","Programming");

const container : (HTMLElement | null) = document.getElementById("sigma-container");
const settingsSigma = {
    labelRenderedSizeThreshold: 1,
  }

const renderer = new Sigma(graph,container!,settingsSigma);
//the ! in `container!` asserts that `container` is non-null (this stops the IDE warnings)