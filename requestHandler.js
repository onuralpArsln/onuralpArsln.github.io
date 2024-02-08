

  // Function to handle the button click event
  function getName() {
   
    // if fetch gets cors error 
    // npm install cors
    // Send a GET request to the API endpoint
    fetch('https://paranceys-cool-api.cyclic.app/name')
        .then(response => {
            console.log(response);
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Update the paragraph element with the random number
            document.getElementById('apiNameAnswer').textContent = `Api answer is : ${data.name}`;
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching data:', error);
        });
}



// dom dan eventi dinlemeye başladın clicke func cağırdın signal slot mantığı 


// Add event listener to the button
document.getElementById('apiNameButton').addEventListener('click', getName);