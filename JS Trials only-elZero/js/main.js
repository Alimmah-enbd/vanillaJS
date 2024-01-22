//local storage check
let mainColors = localStorage.getItem("color-option");





if (mainColors != null) {
  // console.log("local storage in not empty");
  // console.log(localStorage.getItem("color-option"));
  document.documentElement.style.setProperty("--main--color", mainColors);

  // chech for active class
  //rempove active from all children
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // add active class on element same as local storage

    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  //toggle spin
  this.classList.toggle("fa-spin");
  // open main setting box
  document.querySelector(".setting-box").classList.toggle("open");
};

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.target.dataset.color);
    //set color on root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );

    //Set color to local storage
    localStorage.setItem("color-option", e.target.dataset.color);
    handleActive(e);
    //rempove active from all children
    // e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    //   element.classList.remove("active");
    // });

    // // add active class on self
    // e.target.classList.add("active");
  });
});


function handleActive(ev) {

  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  // Add Active Class On Self
  ev.target.classList.add("active");

}


//random back ground option
let backgroundOption = true;

// variable to control internval
let backgroundInterval;

//chech if there is Background item in local storage
let backgroundLocalItem = localStorage.getItem("background-option");

// check rendom bakground is not empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
    randomizImgs();    
  } else {
    backgroundOption = false;
  }
  console.log(backgroundOption);

  // //remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

//switch backgrounds
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    //rempove active from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // add active class on self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true; 
      randomizImgs();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

// select landing page element
let landingPage = document.querySelector(".landing-page");

//get arrary of images
let imgsArrary = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

//function that randomize imgs
function randomizImgs() {
  if (backgroundOption === true) {
    //change background
    backgroundInterval = setInterval(() => {
      //get random number
      let randomNumber = Math.floor(Math.random() * imgsArrary.length);
      landingPage.style.backgroundImage = `url("images/${imgsArrary[randomNumber]}")`;
    }, 1000);
  }
}




// skills section
window.addEventListener("load", function() {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(function(progress) {
    const width = progress.getAttribute("style");
    progress.style.width = "0";
    setTimeout(function() {
      progress.style.width = width;
    }, 1000);
  });
});
// End of skills section


// Start gallery 
//creat pop up with our image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", () => {
    //craet Over lay element
    let overLay = document.createElement("div");

    //add class to over lay
    overLay.classList.add("popup-overlay");

    //append over lay to the body
    document.body.appendChild(overLay);

    //creat popup
    let popupBox = document.createElement("div");

    //add class to popup box
    popupBox.className = "popup-box"

    if (img.alt !==null) {
      // creating heading
      let imgHeading = document.createElement("h3");

      //creat text for heading
      let imgText = document.createTextNode(`${img.alt}`);

      //append the text to the heading
      imgHeading.appendChild(imgText);
      

      //append the Heading to the popup box
      popupBox.appendChild(imgHeading);
    }


    //creat the image
    let popupImage = document.createElement('img');
    console.log(img.src)
    

    // set image src
    popupImage.src = img.src;

    // add image to popup-box
    popupBox.appendChild(popupImage);

    //Append popup box to body
    document.body.appendChild(popupBox);

    //creat the close span
    let closeButton = document.createElement("span");

    //creat the close button
    let closeButtonText = document.createTextNode("x");

    //appent text to close button
    closeButton.appendChild(closeButtonText);

    //add class to close button
    closeButton.className ="close-button";

    //add close butto to the pop up
    popupBox.appendChild(closeButton);
 


  });

});




//close popup

document.addEventListener("click", function (e) {
  

  if (e.target.className == 'close-button') {
    
    //remove the current pop up
    e.target.parentNode.remove();

  
    //remove the over lay
    document.querySelector(".popup-overlay").remove();
  }
  

});


//End gallery




// start bullets

//select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".links a");
// console.log(allBullets);


//function that scrolls to selected section

function scrollTOSelectedSection(elements) {


elements.forEach(ele => {

  ele.addEventListener('click', (e) => {

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior : 'smooth'
    });

  });
  
});
  
}
scrollTOSelectedSection(allBullets);
scrollTOSelectedSection(allLinks);
// end bullet


