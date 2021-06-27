

let takePermission = document.querySelector(".takepermission");

takePermission.addEventListener("click",function(){
  if(confirm("Send request to annotation")==true){
    socket.emit("createReq");
  }
})


let annotationBtn2 = document.querySelector(".annotation");
let toolBarProp = document.querySelector(".toolBar");
let ispermission = document.querySelector(".takepermission img");
annotationBtn2.addEventListener("click", function (e) {
  if (ispermission.classList.contains("selectPermissionBtn")) {
    if (e.currentTarget.classList.contains("selectAnnotationBtn")) {
      e.currentTarget.classList.remove("selectAnnotationBtn");
      toolBarProp.classList.add("offAnnotationForToolbar");
    } else {
      e.currentTarget.classList.add("selectAnnotationBtn");
      toolBarProp.classList.remove("offAnnotationForToolbar");
    }
  }else{
    alert("Annotation Not Allowed at this Moment:")
  }
});

annotationBtn2.classList.remove("selectAnnotationBtn");
toolBarProp.classList.add("offAnnotationForToolbar");

// let stopBtn = document.querySelector(".stop");
// let body = document.querySelector("body");
// let permissionBtn = document.querySelector(".permission");
let className = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eight",
  "ninth",
  "tenth",
  "eleventh",
];
let color = [
  "#fdcb6e",
  "#fdcb6e85",
  "#fd79a785",
  "#fd79a750",
  "#636e72",
  "#636e72",
  "#636e7257",
  "#42795b88",
  "#f4ebc3",
  "#fffedf",
  "#2a2c31",
  "#d3643b",
];

let clrBoard = document.querySelector(".board");

///////color btn working

let colorBtn = document.querySelector(".gridColor");

colorBtn.addEventListener("click", function (e) {
  let idx = 0;
  for (let i = 0; i < color.length; i++) {
    if (e.currentTarget.classList.contains(`${className[i]}`) == true) {
      idx = i;
      clrBoard.classList.remove(`${className[i]}`);
      colorBtn.classList.remove(`${className[i]}`);
      break;
    }
  }

  idx += 1;
  idx = idx % 11;

  clrBoard.classList.add(`${className[idx]}`);
  colorBtn.classList.add(`${className[idx]}`);
});

//////permission btn working
// permissionBtn.addEventListener("click", function (e) {
//   grantPermission();
//   console.log("ok:");
//   socket.emit("myclick");
// });

// function grantPermission() {
//   let permissionBtn = document.querySelector(".permission");
//   if (permissionBtn.classList.contains("selectPermissionBtn")) {
//     permissionBtn.classList.remove("selectPermissionBtn");
//   } else {
//     permissionBtn.classList.add("selectPermissionBtn");
//   }
// }

////////stop btn working
// stopBtn.addEventListener("click", function () {
//   // body.innerHTML = "";
//   console.log("stop event");
//   window.location.assign("endingmeeting.html");
//   socket.emit("stopboard");
// body.innerHTML=`<div class="meetingEndContainer">
// <div class="meetingEndPopup">
//     <span class="endmeetingspan">Meeting Closed</span>
// </div>
// </div>`;
// });
