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

let messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    console.log(name, email, message );


    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");
    newMessage.innerHTML =
    `<a href="mailto:${email}">${name}</a>
    <span>${message}</span>`;

    

  

    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button";
    removeButton.className = "removeButton"

    removeButton.addEventListener("click", function () {
    let entry = removeButton.parentNode;
    entry.remove();
    });

    /*
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.type = "button";
    editButton.addEventListner("click", function(){
        

    });
    */

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
   
    /*removeButton.appendChild(editButton);
    */
    messageForm.reset();
});




