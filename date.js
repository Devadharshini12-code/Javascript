
function displayCurrentDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();  // Corrected variable name
    let time = now.toLocaleTimeString();  // Fixed typo

    console.log("Current Date:", date);
    console.log("Current Time:", time);
}

displayCurrentDateTime();
