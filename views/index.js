// console.log("heather is sleepy");
var cityInput = document.getElementById('info');
var result = document.getElementById('result')

cityInput.addEventListener('submit', function(e) { // event listener for click submit button

  e.preventDefault(); // prevents page from refreshing

  var cityName = document.getElementById('city-name').value.trim();
  var date = document.getElementById('date').value;

  if(cityName.match("^[a-zA-Z0-9,\\s]+$")){ // Regex Check to see if input is valid (alphabet and numeric values only )
    result.style.display = 'block'; // allowed us to hide results box prior to submitting results
    result.innerText = "Loading..."
    document.getElementById("info").reset(); // Resetting the values of the fields that were input
    var url = '/sunset?' + 'cityname=' + encodeURI(cityName) + '&date=' + date; // Creates url for API call
    var xhr = new XMLHttpRequest(); // XHR request sends API call to backend w/ input data
    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        result.innerText = xhr.response;
      }
    }
    xhr.open('GET', url); //open GET request
    xhr.send(); // send request
  }else{
    result.style.display = 'block';
    result.innerText = "Your search contains speical characters or the format is not right, please make sure you input correctly";
  }

});
