var main = document.getElementById("main");
let arr = 
[
  "https://i.pinimg.com/736x/ea/66/44/ea6644a989dd2f895fbef614d61c4233.jpg",
  "https://i.pinimg.com/736x/c9/d8/3e/c9d83ef56d0ab3d37d746721dc96aee0.jpg",
  "https://i.pinimg.com/736x/41/3e/3a/413e3a4a0fb1bca3f0dc0c456b2a57c1.jpg",
  "https://i.pinimg.com/736x/49/d9/22/49d9221742579b7d65b14828d09f9f96.jpg",
  "https://i.pinimg.com/736x/4e/85/48/4e854817afc21a287a43307e350a79a9.jpg",
  "https://i.pinimg.com/736x/df/01/1f/df011f3aad7e91e3e6a5f112d7a710a0.jpg",
  "https://i.pinimg.com/736x/42/09/84/420984ca47819d8a03fe45db25eb9d17.jpg",
  "https://i.pinimg.com/736x/5a/3b/c9/5a3bc9d30d05883c7d3e6a77ac216fa1.jpg",
  "https://i.pinimg.com/736x/cf/a3/cc/cfa3cc86947c4072f095ceb6f9f0c74f.jpg"
];
let s = "";
for(let i=1; i<=65; i++){
 let r =Math.floor(Math.random()*arr.length);
 s += `<div class="card"><img src=${arr[r]}></div>`;
}

main.innerHTML = s;


