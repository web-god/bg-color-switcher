const colorList = document.getElementsByClassName("color");

// the for...in and for...of loops are not suitable for iterating over an HTMLCollection because an HTMLCollection is not a standard JavaScript array, and it doesn't have the same iteration methods and properties as arrays.

for (let i = 0; i < colorList.length; i++) {
  colorList[i].addEventListener("click", function () {
    document.body.style.backgroundColor = event.target.id;
    text.style.color = "white";
  });
}
