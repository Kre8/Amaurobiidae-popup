

let toolTip = document.getElementById("tooltip3");
let copy = document.getElementById("copy");
let ttImages = document.getElementsByClassName("tt-image");

const track = () => {

  let mouseX = event.clientX + document.body.scrollLeft + 1; 
  let mouseY = event.clientY + document.body.scrollTop - 40; 
  toolTip.setAttribute("style", "top:" + mouseY + "px; left:" + mouseX + "px;"); on mouse position
};
window.addEventListener("mousemove", track); 

const showTt = (e) => {
  if (e.target.tagName === "SPAN") {

    toolTip.setAttribute("class", "show"); 
    let ttImage = e.target.dataset.img; 
    toolTip.innerHTML = '<img src="' + ttImage + '">'; attribute
  } else {
    toolTip.setAttribute("class", ""); 
  }
};
copy.addEventListener("mouseover", showTt); 



let allCities = [];
let cities = [];

for (let i = 0; i < ttImages.length; i++) {
  allCities.push(ttImages[i].dataset.img);  
}

for (let i = 0; i < allCities.length; i++) {
 
  cities[i] = new Image();
  cities[i].src = allCities[i];
}