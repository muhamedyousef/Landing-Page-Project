# FWD-Landing page
**project map**
--
the project is divided into 3 main functions: 

    1. navBuild()
    2. scrolTO()
    3. intoViewDetect()

>navBuild()

    This function was created to populate the empty navigation element through loopings through sections or the element of choice to section by and for every section it creates a list element and append alink element to an empty href initially 

>scrollTO()

    This function simply loops through list elements and for each element it adds a click event listner and on bing clicked it scrolls to the corresponding section it was built from 

>intoViewDetect()

This ufnction was created to access the vertical offset of each sectionelement and detect being between the 10th and 70th percentile of the page and if true, it adds `.active` class to the section and adds `.active` class to the navigation link corresponding to the section