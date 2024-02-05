let datacontainer = document.querySelector(".data-container");

function update() {
  // let text = document.querySelector(".text");
  localStorage.setItem("notes", datacontainer.innerHTML);
  console.log(localStorage.getItem("notes"));
}

function shownotes() {
  // let text = document.querySelector(".text");
  datacontainer.innerHTML = localStorage.getItem("notes");
  console.log("shownotes h");
}
shownotes();

function addpage() {
  let page = document.createElement("div");
  let p = document.createElement("p");
  let img = document.createElement("img");
  img.src = "skull.png";
  img.className = "remove";
  // img.onclick = del;
  p.contentEditable = "true";
  page.className = "page";
  p.className = "text";

  datacontainer.appendChild(page);
  page.appendChild(p);
  page.appendChild(img);
  console.log("success");
}

// function del() {
//   let img = document.querySelector(".remove");
//   let page = img.closest(".page");
//   page.remove();
//   update();
// }

document.body.addEventListener("click", (e) => {
  if (e.target.className === "remove") {
    e.target.parentElement.remove();
    // alert("if works");
    update();
  } else if (e.target.className === "text") {
    console.log("if works");
    let notes = document.querySelectorAll(".text");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        update();
        console.log("update while writing");
      };
    });
  }
});
