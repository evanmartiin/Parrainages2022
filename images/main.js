import html2canvas from "html2canvas";
import { colors } from "./public/colors.js";
import { data } from "./public/data.js";
import fs from 'fs';
import path from 'path';
// import "./styles.css";
import {svg} from './svg.js'

function buildHtml() {
  var header = '';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + svg + '</body></html>';
};

const visualize = (arr) => {
  console.log('oui');
  fs.readFile(path.resolve('index.html'), 'utf8', function(err, html){
    if (err) console.log(err)
    if (html) console.log(html)
  })
  var fs = require('fs');

var fileName = 'test.html';
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
  console.log(html);
});
  // fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
  // .then((response) => response.text())
  // .then((res) => console.log(res));
  // let svgs = Array.from(document.getElementsByTagName("path"));
  
  // svgs.forEach((dep) => {
  //   dep.setAttribute("stroke", "#000");
  //   dep.setAttribute("stroke-miterlimit", "3.974");
  //   dep.setAttribute("stroke-width", ".2");

  //   let dom = arr.find((el) => el.name === dep.attributes.title.value);
  //   let color = colors.find(el => el.name === (dom ? dom.major.name[0] : "Aucun vote")).color;
  //   dep.setAttribute("fill", color)
  // });

  // let legend = document.getElementsByClassName("legend")[0];

  // colors.forEach(colorSet => {
  //   let caption = document.createElement("div");
  //   caption.classList.add("caption");
  //   legend.appendChild(caption);

  //   let div = document.createElement("div");
  //   div.style.backgroundColor = colorSet.color;
  //   caption.appendChild(div);

  //   let p = document.createElement("p");
  //   p.innerHTML = colorSet.name;
  //   caption.appendChild(p);
  // })
}

visualize(data);

// html2canvas(document.body).then((canvas) => {
//   var image = canvas.toDataURL();
//   var aDownloadLink = document.createElement("a");
//   aDownloadLink.download = "canvas_image.png";
//   aDownloadLink.href = image;
//   aDownloadLink.click();
// });
