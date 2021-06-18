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
const posTop = sectionArr.map((section) => {
  posTopInn = section.offsetTop;
  return posTopInn;
}); // a constant arry to contain the offset vlaue of each section element from the top of the document [wasn't very necessary but it was part of a previous failed implementation, but it serves the purpose anyway]


/**
 * End Global Variables
 * Start Helper Functions
 *
 */
let addActiveClass = (sectionID) => {
  document.querySelector(`#${sectionID}`).classList.add("your-active-class");
};
let removeActiveClass = (sectionID) => {
  document.querySelector(`#${sectionID}`).classList.remove("your-active-class");
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
    liLink.setAttribute("id", `nav-link-${sectionArr.indexOf(element)}`); // adding unique id attribute to each list item element created
    liLink.classList.add("menu__link");
    liLink.innerText = sectionArr[sectionArr.indexOf(element)].dataset.nav;
    listEl.appendChild(liLink);
    document.querySelector("#navbar__list").appendChild(listEl);
    return listEl, liLink; //making both variables avialable out
  });
};

// Add class 'active' to section when near top of viewport
let intoViewDetect = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sectionArr.forEach((section) => {
    console.log(section.offsetTop , section.id)
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight*.25 &&
      scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*.25
    ) {
      addActiveClass(section.id); 
    }else{
      removeActiveClass(section.id);
    }
  });
};

// Scroll to anchor ID using scrollTO event
let scrollTOo = function () {
  let links = document.querySelectorAll(".list-item");
  let linkArr = [...links];

  linkArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: posTop[linkArr.indexOf(link)] * 0.95,
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
scrollTOo();

// Set sections as active
intoViewDetect();
