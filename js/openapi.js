const planetsButton = document.querySelector("#planetButton");
const planetSection = document.getElementById("planets");
const planetList = planetSection.querySelector("ul");

planetsButton.addEventListener("click", function() {
    if(planetList.children.length > 0){
        console.log("Data Already Displaying Wiping Data");
        planetList.innerHTML = '';
        return;
    }
    console.log("Planets Button Clicked fetching Data");
    fetch("https://www.swapi.tech/api/planets")
    .then(response => {
        if(!response.ok){
            throw new Error(response.status)
        }else return response.json();
    })
    .then(function(planets){
        console.log(planets);
        for(let i =0;i< planets.results.length;i++){
            console.log(planets.results[i]);
            const displayedPlanets = document.createElement("li");
            displayedPlanets.textContent = planets.results[i].name;
            planetList.appendChild(displayedPlanets);
        }
    })
     .catch(error => console.error("Error: ", error));
})

const starShipsButton = document.querySelector("#starShipsButton");
const starShipsSection = document.getElementById("starShips");
const starShipsList = starShipsSection.querySelector("ul");

starShipsButton.addEventListener("click", function(){
    if(starShipsList.children.length > 0){
        console.log("Data Already Displayed Wiping Data");
        starShipsList.innerHTML = "";
        return;
    }
    console.log("StarShips Button pressed fetching Data");
    fetch("https://www.swapi.tech/api/starships")
    .then(response => {
        if(!response.ok){
            throw new Error(response.status)
        }else return response.json();
    })
    .then(function(starships){
        console.log(starships);
        for(let i = 0; i < starships.results.length;i++){
            console.log(starships.results[i]);
            const displayedStarShips = document.createElement("li");
            displayedStarShips.textContent = starships.results[i].name;
            starShipsList.appendChild(displayedStarShips);
        }
    })
    .catch(error => console.error("Error: ",error));
})