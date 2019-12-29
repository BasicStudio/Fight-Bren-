const self = ()=> {
  const x = document.body.getElementsByTagName("loadscreen")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  document.body.getElementsByTagName("loadscreen")[0].style.position = "absolute"
  document.body.getElementsByTagName("loadscreen")[0].style.width = "100%"
  document.body.getElementsByTagName("loadscreen")[0].style.height = "100%"
}
function loadTime(time){
  setTimeout(self, time)
}