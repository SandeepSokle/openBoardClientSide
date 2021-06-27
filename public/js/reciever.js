

let isreq = false;

socket.on("onsize", function(size) {
  ctx.lineWidth = size;
});
socket.on("oncolor", function(color) {
  ctx.strokeStyle = color;
});
socket.on("ontoolchange", function(tool) {
  handleToolChange(tool);
});
socket.on("onhamburger", function() {
  handleHamburger();
});
socket.on("onmousedown", function(point) {
  const { x, y, color, width } = point;
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  undoStack.push(point);
});
socket.on("onmousemove", function(point) {
  const { x, y, color, width } = point;
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.lineTo(x, y);
  ctx.stroke();
  undoStack.push(point);
});
socket.on("onundo", function() {
  undoMaker();
});
socket.on("onredo", function() {
  redoMaker();
});

socket.on("onclick",function(){
  console.log("Hello")
  
  // grantPermission();
  let grantPermission = document.querySelector(".takepermission img");
  if (grantPermission.classList.contains("selectPermissionBtn")) {
    grantPermission.classList.remove("selectPermissionBtn");
    alert("Now you can Not Use Annotation:")
  } else {
    grantPermission.classList.add("selectPermissionBtn");
    alert("Now you can Use Annotation:")
  }
})

socket.on("onstop",function(){
  console.log("stop event");
  window.location.assign("endingmeeting.html");
})


socket.on("req",function(){

  confirm("Client Want to Annotate");

})



