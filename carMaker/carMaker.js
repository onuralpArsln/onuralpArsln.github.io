function getValues() {
    var color = document.getElementById("colorSelect").value;
    console.log("Selected color is " + color);
}

// Add event listener to the button
document.getElementById('createNow').addEventListener('click', getValues);

var currentColor = NaN;
var lastColor = NaN;

function colorChange() {
    lastColor = currentColor;
    var color = document.getElementById("colorSelect").value;
    currentColor = color;
    console.log("current color: " + currentColor);
    console.log("last color: " + lastColor);
    document.getElementById("carPreview").style.backgroundColor = color;
}

document.getElementById("colorSelect").addEventListener('change', colorChange);


function bodyChange() {

    var bodyType = document.getElementById("bodySelect").value;


    var element = document.getElementById('carPreview');

    // Log the class list
    console.log(element.classList);

    // Iterate over the class list and log each class
    element.classList.forEach(function (cls) {
        console.log(cls);
    });

}

document.getElementById("bodySelect").addEventListener('change', bodyChange);


