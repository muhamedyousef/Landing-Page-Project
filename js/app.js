/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let sections = document.getElementsByTagName("section");
let sectionArr = [...sections]; //to turn  HTMLColletion into an array (Spread opperator is used from ECMAScript2015)


/**
 * End Global Variables
 * Start Helper Functions
 *
 */
let addActiveClass = (sectionID, sectionIndex) => {
  document.querySelector(`#${sectionID}`).classList.add("your-active-class");
  document.querySelector(`#nav-link-${sectionIndex}`).classList.add("active");
};
let removeActiveClass = (sectionID, sectionIndex) => {
  document.querySelector(`#${sectionID}`).classList.remove("your-active-class");
  document .querySelector(`#nav-link-${sectionIndex}`).classList.remove("active");
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

let buildNav = function () {
  sectionArr.forEach((element) => {
    let listEl = document.createElement("li"); // create the list item element
    listEl.classList.add("list-item"); // add a class name to each list item element created

    let liLink = document.createElement("a"); // create link element
    liLink.href = " "; //`#${sectionArr[sectionArr.indexOf(element)].id}`;
    liLink.setAttribute("id", `nav-link-${sectionArr.indexOf(element)}`); // adding unique id attribute to each list item  created
    liLink.classList.add("menu__link");
    liLink.innerText = sectionArr[sectionArr.indexOf(element)].dataset.nav;
    listEl.appendChild(liLink);
    document.querySelector("#navbar__list").appendChild(listEl);
    return listEl, liLink; //making both variables avialable outside the function
  });
};

// Add class 'active' to section when near top of viewport
let intoViewDetect = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sectionArr.forEach((section) => {
    let sectionDomRect = section.getBoundingClientRect();
    if (
      /*the top of the element is more than negative 10% of the window height to compensate for the width of nav. bar
       and not more than 70% percent of the window height 
       [the numbers and percentages here do not follow certain rule and were dictated by trial & error]*/  
      sectionDomRect.top >= -0.1 * window.innerHeight &&
      sectionDomRect.top < 0.7 * window.innerHeight
    ) {
      addActiveClass(section.id, sectionArr.indexOf(section));
    } else {
      removeActiveClass(section.id, sectionArr.indexOf(section));
    }
  });
};

// Scroll to anchor ID using scrollTO event
let scrollTO = function () {
  let links = document.querySelectorAll(".list-item");
  let linkArr = [...links];

  linkArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top:sectionArr[linkArr.indexOf(link)].offsetTop*.95,
        left: 0,
        behavior: "smooth",
      }); //scroll to the top position of the corresponding link element
    });
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();
// Scroll to section on link click
scrollTO();

// Set sections as active
window.onscroll = function () {
  intoViewDetect();
};
