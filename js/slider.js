// Get Slider Items
let sliderimg = Array.from(document.querySelectorAll(".slider-container img"));

// slider count
let slidescount = sliderimg.length;

// Current number element
let currentslide = 3;

// slide-number element
let slideNumberElement = document.getElementById("slide-number");

//Get previous and next Buttons
let nextbtn = document.getElementById("next"),
  prevtbtn = document.getElementById("prev");

// Handle click previous and next Buttons
nextbtn.onclick = nextslide;
prevtbtn.onclick = prevslide;

// Creat the Main UL Element
let paginationElement = document.createElement("ul");

// set attrebute to the paginationElement
paginationElement.setAttribute("id", "pagination-ul");

// Craet List Item(li)
for (let i = 1; i <= slidescount; i++) {
  // craete LI
  let paginationitem = document.createElement("li");
  //add custom attrebute
  paginationitem.setAttribute("data-index", i);
  // set item content
  paginationitem.appendChild(document.createTextNode(i));
  // set item in Ul
  paginationElement.appendChild(paginationitem);
}

// set paginationElement(Ul) to the body
document.getElementById("indecator").appendChild(paginationElement);

// get new created Ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// get new created Ul li
let paginationlistitem = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
// Looop Throught pullets items
for (let i = 0; i < slidescount; i++) {
  paginationlistitem[i].onclick = function () {
    currentslide = this.getAttribute("data-index");
    checker();
  };
}
// trigger the checker function
checker();

// next slide function
function nextslide() {
  if (currentslide == 6) {
    return false;
  } else {
    currentslide++;
    checker();
  }
}

// prev slide function
function prevslide() {
  if (prevtbtn.classList.contains("prev-disabled")) {
    return false;
  } else {
    currentslide--;
    checker();
  }
}

//checker function
function checker() {
  // Set slide number
  slideNumberElement.textContent = `the slide #${currentslide} of ${slidescount}`;
  // function remve all
  removeall();
  //set active class on current slide
  sliderimg[currentslide - 1].classList.add("active");

  //set active class on current paginationitem
  paginationCreatedUl.children[currentslide - 1].classList.add("active");

  //check of current slide first and last
  if (currentslide == slidescount) {
    nextbtn.classList.add("next-disabled");
  } else {
    nextbtn.classList.remove("next-disabled");
  }

  if (currentslide == 1) {
    prevtbtn.classList.add("prev-disabled");
  } else {
    prevtbtn.classList.remove("prev-disabled");
  }
}

// function remve class active from pullets and img
function removeall() {
  // remove class from imges
  sliderimg.forEach((element) => {
    element.classList.remove("active");
  });
  // remove class from pullets
  paginationlistitem.forEach((element) => {
    element.classList.remove("active");
  });
}
