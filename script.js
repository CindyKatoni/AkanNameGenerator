function akanGenerator() {

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

    let CC = year.splice(0, 2);
    let YY = year.splice(2, 4);

    //Formula for calculating akan names

}