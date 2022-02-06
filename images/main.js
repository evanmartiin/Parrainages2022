import html2canvas from "html2canvas";
import { colors } from "./public/colors";
import { data } from "./public/data";
import "./styles.css";

function visualize(arr) {
  let svgs = Array.from(document.getElementsByTagName("path"));
  
  svgs.forEach((dep) => {
    dep.setAttribute("stroke", "#000");
    dep.setAttribute("stroke-miterlimit", "3.974");
    dep.setAttribute("stroke-width", ".2");

    let dom = arr.find((el) => el.name === dep.attributes.title.value);
    let color = colors.find(el => el.name === (dom ? dom.major.name[0] : "Aucun vote")).color;
    dep.setAttribute("fill", color)
  });

  let legend = document.getElementsByClassName("legend")[0];

  colors.forEach(colorSet => {
    let caption = document.createElement("div");
    caption.classList.add("caption");
    legend.appendChild(caption);

    let div = document.createElement("div");
    div.style.backgroundColor = colorSet.color;
    caption.appendChild(div);

    let p = document.createElement("p");
    p.innerHTML = colorSet.name;
    caption.appendChild(p);
  })
}

visualize(data);

// html2canvas(document.body).then((canvas) => {
//   var image = canvas.toDataURL();
//   var aDownloadLink = document.createElement("a");
//   aDownloadLink.download = "canvas_image.png";
//   aDownloadLink.href = image;
//   aDownloadLink.click();
// });
