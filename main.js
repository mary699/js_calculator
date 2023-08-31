let display = document.getElementById("display");
let displayTotal = document.getElementById("displayTotal");
// Array.from() method returns an array from any object with a length property. The Array.from() method returns an array from any iterable object.
let buttons = Array.from(document.getElementsByClassName("button"));


// Set font size, color, and text-align for display and displayTotal
display.style.fontSize = "20px"; 
display.style.color = "white"; 
display.style.textAlign = "right"; 

displayTotal.style.fontSize = "26px"; 
displayTotal.style.color = "white"; 
displayTotal.style.textAlign = "right"; 



// call event listner
// map() creates a new array from calling a function for every array element.
display.innerText = "0";
if (display.innerText === "0") {
    display.innerText = ""; // Clear the initial zero when a button is clicked
}
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "";
                displayTotal.innerText = ""; // Clear the total display
                break;

            case "←":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;

            case "=":
                try {
                    // eval() function in JavaScript is used to evaluate or execute a string as code. I
                    let result = eval(display.innerText);
                    displayTotal.innerText = result; // Update the total display
                    // display.innerText = result; // Also update the main display
                } catch {
                    displayTotal.innerText = "Error!"; // Update the total display
                    display.innerText = "Error!"; // Also update the main display
                }
                break;
                case "+/-":
                    if (display.innerText !== "0") {
                        // used to accept a string and convert it into a floating-point number.
                        display.innerText = parseFloat(display.innerText) * -1;
                    }
                    break;
    
                case "÷":
                display.innerText += "/";
                break;

            case "x":
                display.innerText += "*";
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
