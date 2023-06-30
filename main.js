let x;

document.getElementById("random").onclick = function() {
  x = Math.random() * 1;

  document.getElementById("xindex").innerHTML = x;
}