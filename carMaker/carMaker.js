function getValues() {
    var color = document.getElementById("colorSelect").value;
    console.log("Selected color is " + color);
}

// Add event listener to the button
document.getElementById('createNow').addEventListener('click', getValues);


function colorChange() {
    var color = document.getElementById("colorSelect").value;
    console.log("color has change" + color);
}


document.getElementById("colorSelect").addEventListener('change', colorChange);