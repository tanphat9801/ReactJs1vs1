let text = document.getElementById("text");

window.onload = function () {
  text.addEventListener("input", function () {
    document.getElementById("myText").innerHTML = text.value;
  });
};
