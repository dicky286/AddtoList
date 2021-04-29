let addBtn1 = document.querySelector("#addFruitButton1");
let addBtn2 = document.querySelector("#addFruitButton2");
let fruitList1 = document.querySelector("#fruitList1");
let fruitList2 = document.querySelector("#fruitList2");

addBtn1.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.innerText = document.querySelector("#fruitInput1").value;
  newLi.classList.add("list-group-item");
  newLi.classList.add("fs-2");

  newLi.addEventListener("mouseenter", () => {
    newLi.classList.add("bg-warning");
  });
  newLi.addEventListener("mouseleave", () => {
    newLi.classList.remove("bg-warning");
  });
  fruitList1.appendChild(newLi);
  newLi.addEventListener("click", () => {
    let newLiCopy = document.createElement("li");
    newLiCopy.innerText = newLi.innerText;
    newLiCopy.classList.add("list-group-item");
    newLiCopy.classList.add("fs-2");
    newLiCopy.addEventListener("mouseenter", () => {
      newLiCopy.classList.add("bg-warning");
    });
    newLiCopy.addEventListener("mouseleave", () => {
      newLiCopy.classList.remove("bg-warning");
    });
    fruitList2.appendChild(newLiCopy);
  });
});

addBtn2.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.innerText = document.querySelector("#fruitInput2").value;
  newLi.classList.add("list-group-item");
  newLi.classList.add("fs-2");

  newLi.addEventListener("mouseenter", () => {
    newLi.classList.add("bg-warning");
  });
  newLi.addEventListener("mouseleave", () => {
    newLi.classList.remove("bg-warning");
  });

  fruitList2.appendChild(newLi);
  newLi.addEventListener("click", () => {
    let newLiCopy = document.createElement("li");
    newLiCopy.innerText = newLi.innerText;
    newLiCopy.classList.add("list-group-item");
    newLiCopy.classList.add("fs-2");
    newLiCopy.addEventListener("mouseenter", () => {
      newLiCopy.classList.add("bg-warning");
    });
    newLiCopy.addEventListener("mouseleave", () => {
      newLiCopy.classList.remove("bg-warning");
    });
    fruitList1.appendChild(newLiCopy);
  });
});
