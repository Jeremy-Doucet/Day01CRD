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
function addMarker() {
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

// U - Update
function editMarker(i) {
  //Change the input values to be this specific marker
  document.getElementById('inputColor').value = markerArray[i].color;
  document.getElementById('inputMat').value = markerArray[i].material;
  document.getElementById('inputPerm').value = markerArray[i].isPerm;

  //Overwrite the submit button in the form, with edit buttons
  document.getElementById('Button-Group').innerHTML = '<button class="btn btn-success" onclick="saveMarker(' + i + ')">Save</button><button class="btn btn-danger" onclick="clearInputs()">Cancel</button>'
}

function saveMarker(i) {
  //Get the values from the inputs
  var color = document.getElementById('inputColor').value;
  var mat = document.getElementById('inputMat').value;
  var perm = document.getElementById('inputPerm').value;

  //create a new marker based on the values
  var marker = new Marker(color, mat, perm);

  //Replace the old marker in the array
  markerArray[i] = marker;

  //Redraw the submit button, and clear the inputs
  clearInputs();

  //Redraw all of the markers
  displayMarkers();
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
  return "<li><i>Color</i>: " + marker.color + ", <i>Material</i>: " + marker.material + ", <i>Is permanent</i>: " + marker.isPerm + "<button class='btn btn-warning' onclick='editMarker(" + markerArray.indexOf(marker) + ")'>Edit</button><button class='btn btn-danger' onclick='deleteMarker(" + markerArray.indexOf(marker) + ")'>&times;</button></li>";
}

function clearInputs() {
  //Clear out all of the inputs
  document.getElementById('inputColor').value = "";
  document.getElementById('inputMat').value = "";
  document.getElementById('inputPerm').value = "true";

  //Overwrite the edit buttons with a save button
  document.getElementById('Button-Group').innerHTML = '<button type="button" class="btn btn-success" onclick="addMarker()">Submit</button>'
}
