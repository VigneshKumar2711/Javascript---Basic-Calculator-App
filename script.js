function appendToDisplay(value) {
   document.getElementById("display").value += value;
}

function clearDisplay() {
   document.getElementById("display").value = "";
}

function calculate() {
   try {
       document.getElementById("display").value = eval(document.getElementById("display").value);
   } catch (error) {
       alert("Invalid Expression");
   }
}

function scientificFunction(type) {
   let display = document.getElementById("display");
   let expression = display.value.trim();

   // Check if the last entered value is an operator (invalid input case)
   if (expression === "" || isNaN(expression.slice(-1))) {
       showErrorMessage();
       return;
   }

   try {
       let value = parseFloat(expression); // Convert entered number to float

       switch (type) {
           case "sin":
               display.value = Math.sin(value * (Math.PI / 180)); // Convert degrees to radians
               break;
           case "cos":
               display.value = Math.cos(value * (Math.PI / 180));
               break;
           case "tan":
               display.value = Math.tan(value * (Math.PI / 180));
               break;
           case "log":
               display.value = Math.log10(value); // Logarithm with base 10
               break;
           case "ln":
               display.value = Math.log(value); // Natural logarithm (base e)
               break;
           case "sqrt":
               display.value = Math.sqrt(value); // Square root
               break;
           case "exp":
               display.value = Math.exp(value); // Exponential function
               break;
           case "pow":
               let exponent = prompt("Enter exponent value:");
               display.value = Math.pow(value, parseFloat(exponent)); // Power function
               break;
           default:
               alert("Invalid function");
       }
   } catch (error) {
       alert("Invalid Expression");
   }
}

// Show error message with checkbox
function showErrorMessage() {
   let errorBox = document.createElement("div");
   errorBox.innerHTML = `   
       <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                   background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px gray;">
           <p style="font-size: 18px; color: red;">Invalid format entered.</p>
           <p>Do you want to continue?</p>
           <input type="checkbox" id="confirmBox"> Yes, continue.
           <br><br>
           <button onclick="continueCalculation()">Yes</button>
           <button onclick="closeCalculator()">No</button>
       </div>
   `;
   document.body.appendChild(errorBox);
}

// If "Yes" is clicked
function continueCalculation() {
   let confirmBox = document.getElementById("confirmBox");
   if (confirmBox.checked) {
       document.body.removeChild(document.body.lastChild); // Remove the error message box
   } else {
       alert("Please check the box to proceed.");
   }
}

// If "No" is clicked
function closeCalculator() {
   window.close(); // Closes the browser tab
}
