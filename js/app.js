document.addEventListener("DOMContentLoaded", function (event) {
  console.log("loaded");
});
console.log("loaded again");
/**
 * TODO: instead of it all being the jumbotron that changes, change the HTML so that they
 * are both sectins
 * then move the buttons to the bottom and outside of the sections - in one big div
 * then on the click of that button, change the contents of the section
 * from the outside sections into this "empty" section, and change the text inside
 * this button to say go back
 *
 *
 */

let jumbotron = document.getElementById("jumbotron-bg");

let skillsButton = document.getElementById("skillsButton");

// let titleContainer = document.getElementById("titleContainer");
// let introTextChildren = titleContainer.cloneNode(true);
// console.log(titleContainer);

// let skillsSection = document.getElementById("skillsSection");
// let goBack = skillsButton.cloneNode(true);
// goBack.setAttribute("id", "goBack");
// goBack.innerText = "Go Back";
// goBack.style.marginLeft = "20%";
// skillsSection.appendChild(goBack);

// skillsButton.addEventListener("click", function (event) {
//   console.log("clicked!");
//   jumbotron.innerHTML = "";
//   jumbotron.appendChild(skillsSection);
//   skillsSection.style.display = "inline";
// });

// goBack.addEventListener("click", function (event) {
//   jumbotron.innerHTML = "";

//   jumbotron.appendChild(introTextChildren);
// });
