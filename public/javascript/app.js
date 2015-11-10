function Marker(color, material, isPerm) {
  this.color = color;
  this.material = material;
  this.isPerm = isPerm;
}

var markerArray = [
  new Marker('red', 'plastic', false),
  new Marker('blue', 'metal', false),
  new Marker('pink', 'wooden', true)
];

//R - Read
function displayMarkers() {
  var temp = "";
  //for each marker in the array, append the display string to temp
  for (var i = 0; i < markerArray.length; i++) {
    temp += displayMarker(markerArray[i]);
  }
  //render the element string (aka holder) to the DOM
  document.getElementById('markerResults').innerHTML = temp;
}
//Call the display function on script load
displayMarkers();

//C - Create
function addPen() {
  //Grab the the inputs from our HTML
  var color = document.getElementById('inputColor');
  var material = document.getElementById('inputMat');
  var isPerm = document.getElementById('inputPerm');

  //Create an object based on the values from our inputs
  var marker = new Marker(color.value, material.value, isPerm.value);

  //Add the marker into the array
  markerArray.push(marker);

  //Clear out the inputs
  color.value = material.value = "";
  isPerm.value = "true";

  //Show the changes on the page.
  document.getElementById('markerResults').innerHTML += displayMarker(marker);
}

// D - Delete
function deleteMarker(i) {
  //Remove the selected marker from the array
  markerArray.splice(i, 1);
  //Redisplay all of the markers
  displayMarkers();
}

//Display an individual marker
function displayMarker(marker) {
  return "<li><i>Color</i>: " + marker.color + ", <i>Material</i>: " + marker.material + ", <i>Is permanent</i>: " + marker.isPerm + "<button class='btn btn-danger' onclick='deleteMarker(" + markerArray.indexOf(marker) + ")'>&times;</button></li>";
}
