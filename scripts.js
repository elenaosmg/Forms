window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let testNameInput = document.querySelector("input[name = testName ]");
        let dateInput = document.querySelector("input[name = date ]");
        let rocketTypeInput = document.querySelector("input[name = rocketType ]");
        let rocketBoostersNumInput = document.querySelector("input[name = rocketBoostersNum ]");
        let windInput = document.querySelector("input[name = windRating ]");
        let productionGradeServersInput = document.querySelector("input[name = prodServers ]");
        
        if (testNameInput.value === "" || dateInput.value === ""|| rocketTypeInput.value ===""   
        || rocketBoostersNumInput.value === "" || windInput !== "on"
        || productionGradeServersInput.value === "") 
        {
       alert("All fields are required")
        }
})

 
    
       
})