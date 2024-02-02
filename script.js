// var userAge = prompt("Please enter your birth year");
// function year(age) {
//     var oldGe= 2024 - age;
//     console.log("you are " + oldGe + " years Old")
// }
// year(userAge)

// self written code 
function calculateAge() {
    var userAge = prompt("Please enter your birth year");

    // Check if userAge is a valid number
    if (isNaN(userAge)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    function year(age) {
        var currentYear = new Date().getFullYear();
        var oldAge = currentYear - age;
        alert("You are " + oldAge + " years old.");
    }

    year(parseInt(userAge));
}

// Call the function when the page loads
calculateAge();

