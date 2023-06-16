// Add JavaScript code to handle the calculations and interactions
function calculateBread() {

    // Get current date
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero-based

    // Define vars for subway bread boxes
    var newBox = 85;
    var reqBread = 80;
  
    // Get user input for the remaining bread in the current box
    var remainingBread = parseInt(document.getElementById('remainingBread').value);

    // Check if the value is blank
    if (isNaN(remainingBread)) {
        alert("You need to input a value.")
        return;
    }

    // Check if the input is above 85
    if (remainingBread > newBox) {
    alert("Subway bread boxes don't have '" + remainingBread + "' sticks in the box");
    document.getElementById('number').value = ''
    return;
    }

    // Check if input is postive number
    if (remainingBread < 1) {
        alert("You can't input a negative or null value.")
        document.getElementById('number').value = ''
        return;
    }
  
    // find out what we need to take/get
    var amtToTake = reqBread - remainingBread;
    var finalCount = newBox - amtToTake;
  
    // Display the result on the web page
    document.getElementById('result').innerHTML = `
      <p>You need to take ${amtToTake} breads from the new box</p>
      <p></p>
      <p>=== TO WRITE ON BOX ===</p>
      <p>Date: ${day}/${month}</p>
      <p>Previous Count: ${remainingBread}</p>
      <p>Taking Out: ${amtToTake}</p>
      <p>Final Count: ${finalCount}</p>
    `;
  }
  