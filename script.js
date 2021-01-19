let akanform = document.getElementById("akanform");

akanform.addEventListener("submit", function(event) {
    event.preventDefault();
})

function akanGenerator() {

    //Validating month and day
    function validator() {
        if ((Number(day) < 0 || Number(day) > 31) || (Number(month) < 0 || Number(month) > 12)) {
            alert("Enter valid day or month")
        }
    }



    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let male, female;

    if (document.getElementById("male-input").checked == true) {
        male = "male"
    };
    if (document.getElementById("female-input").checked == true) {
        female = "female"
    };

    validator()

    //
    let daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    let femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    console.log(year, month, day, male, female)

    let CC = year.slice(0, 2);
    let YY = year.slice(2, 4);

    console.log(CC, YY);



    //Formula for calculating akan names
    let dayofweekFormula = Math.floor((((Number(CC) / 4) - 2 * Number(CC) - 1) + ((5 * Number(YY) / 4)) + ((26 * (Number(month) + 1) / 10)) + Number(day)) % 7);
    console.log(dayofweekFormula)
}