// const { createElement } = require("react");

// const today = new Date();
// const thisYear = today.getFullYear;
// const footer = document.querySelector("footer");
// const copyright = body.createElement(p);
console.log("Js is connected");
let today = new Date();
let thisYear = today.getFullYear();
 
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; Juan Garcia ${thisYear} `;
footer.appendChild(copyright);

let skills = ["JavaScript","HTML","CSS","Github"];
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");
 
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skill.classList.add(`skills-list`);
    skillsList.appendChild(skill);
    
}