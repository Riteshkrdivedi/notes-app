function addpage() {
  let page = document.createElement("div");
  let p = document.createElement("p");
  let img = document.createElement("img");
  img.src = "skull.png";
  img.className = "remove";
  p.contentEditable = "true";
  page.className = "page";
  p.className = "text";

  document.body.appendChild(page);
  page.appendChild(p);
  page.appendChild(img);
  console.log("succcess");
}
let skulldel = document.querySelector(".remove");
skulldel.addEventListener("click", del);

function del() {
  alert("hii");
  console.log("hiiii");
}
