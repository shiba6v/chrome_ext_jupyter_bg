"use strict";
// http://0.0.0.0:8888/notebooks/hoge.ipynb
let parser = new URL(document.URL);
// port: 8888
let port = parseInt(parser.port);
const coeff = 130;
let hue = ((port*coeff)%360).toString();
let color = "hsl("+hue+",100%, 80%)";
// parser.pathname: /notebooks/hoge.ipynb
let page_type = parser.pathname.split("/")[1];
if (page_type=="notebooks"){
    // console.log("nb");
    // console.log(color);
    document.getElementById("notebook").style.backgroundColor=color;
}
else if (page_type=="edit"){
    // console.log("edit");
    // console.log(color);
    document.getElementById("texteditor-backdrop").style.backgroundColor=color;
    
}
else{
    console.log("jupyter notebook bg changer exit.");
}