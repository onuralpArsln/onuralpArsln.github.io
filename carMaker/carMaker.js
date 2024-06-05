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


    var carPreview = document.getElementById('carPreview');

    // remove body clas
    if (carPreview.classList.contains("wagon")) { carPreview.classList.remove("wagon"); }
    if (carPreview.classList.contains("hatch")) { carPreview.classList.remove("hatch"); }
    if (carPreview.classList.contains("sedan")) { carPreview.classList.remove("sedan"); }

    carPreview.classList.add(bodyType);






}

document.getElementById("bodySelect").addEventListener('change', bodyChange);


