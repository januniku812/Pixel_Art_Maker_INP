var canvas = document.getElementById('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');
var color = document.getElementById('colorPicker');

//when they press the submit button they should make the grid by calling the function
sizePicker.addEventListener ('submit', function(event) {
  //save height,width,and the grid
  event.preventDefault();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  makeGrid(height,width);
});

function makeGrid(height,width) {
  canvas.innerHTML = ""
  for (var r = 0; r < height; r++) {
    var row = canvas.insertRow(r);
    for (var c = 0; c < width; c++) {
      var cell = row.insertCell(c);
      cell.addEventListener('click',ColorTheSquare);

    }
  }
}

function ColorTheSquare(){
  this.setAttribute("style", `background-color: ${color.value}`);
}
