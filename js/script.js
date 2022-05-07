
      //    02  - Get and Set The Main Information //

// Get Slider Items | Array.from [ES6 Feature]
var SliderImages = Array.from(document.querySelectorAll(".slider_container img"));
// Get Number Of Slides
var slidesCount = SliderImages.length;
// Set current slide
var currentSlide = 3;
// Slide Number Element
var SlideNumberElement = document.getElementById("slide_number");
// previous and Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev"); 


// 02 Handle Click on previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// 06 

// Next slide function 
function nextSlide () {
  if (nextButton.classList.contains("disabled")) {
    // DO No Thing
    return false;
  } else {
    currentSlide++;
    checkerFun();
  }
}
// prev slide function 
function prevSlide () {
  if (prevButton.classList.contains("disabled")) {
    // DO No Thing
    return false;
  } else {
    currentSlide--;
    checkerFun();
  }
}



      //    03  Create The Pagination List  //
// Create the main Element 
var paginationElment = document.createElement("ul");
// Set Id On Created UL Element 
paginationElment.setAttribute("id", "pagination_ul");
// Create List Items Based On Slide Count
for(let i=1; i<=slidesCount; i++){
  // Create the LI
  var paginationItem = document.createElement("li");
  // Set ID for LI 
  paginationItem.setAttribute("data-index", [i]);
  // Set Item Content 
  paginationItem.appendChild(document.createTextNode(i));
  // Append Item to The Main UL List
  paginationElment.appendChild(paginationItem);
};
// Add The Created UL Element to The page
document.getElementById("indicators").appendChild(paginationElment);



    
      //    04  - Create The Checker Function Part 1  //
  
  // Get The pagination ul
  var paginationCreatedUL = document.getElementById("pagination_ul");
  // Get The pagination li Items
  var paginationsBullets = Array.from(document.querySelectorAll("#pagination_ul li"));
  // 06  loop Through All Bullets Items
  for(let i=0; i<paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function() {
      currentSlide = parseInt(this.getAttribute("data-index"));
      checkerFun();
    };
  };



  //  Craete The Checker Function
  function checkerFun() {
    // Set The Slide Number
    SlideNumberElement.textContent = "Slide #" + (currentSlide) + " of " + (slidesCount);
    // Remove All Active Classes From Imaes and Pagination Bullets 
    removeAllClasses ();
    // Set Active Class on Current Slide
    SliderImages[currentSlide - 1].classList.add("active");
    // Set Active Class on Current Pagination Item  
    paginationCreatedUL.children[currentSlide - 1].classList.add("active");

    // Check If Current Slide Is The First or Last
    if(currentSlide == 1){
        prevButton.classList.add("disabled");
        nextButton.classList.remove("disabled");
    }
    else if(currentSlide == slidesCount){
        nextButton.classList.add("disabled");
        prevButton.classList.remove("disabled");
    }
    else{
        prevButton.classList.remove("disabled");
        nextButton.classList.remove("disabled");
    }


  };

checkerFun();



      //    05  - Create The Checker Function Part 2 //

// Remove All Active Classes From Images and Pagination Bullets 
function removeAllClasses () {
  // Loop Through Images
  SliderImages.forEach(function(image){
    image.classList.remove("active");
  });
  // Loop Through Pagination Bullets 
  paginationsBullets.forEach(function(bullet){
    bullet.classList.remove("active");
  });
};





  // 06   Make Slider Run Automatic
  setInterval(function(){
    if(currentSlide < 5){  currentSlide++; }
    else if(currentSlide == slidesCount){  currentSlide = 1; }
    else { return false; }
    checkerFun();
  },2000);



