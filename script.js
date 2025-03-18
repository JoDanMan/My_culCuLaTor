const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

// Function to handle keyboard input
document.addEventListener("keydown", function (event) {
  const key = event.key; // Get the pressed key

  // Check if the key is a number, operator, or special key
  if (/[0-9]/.test(key) || /[\+\-\*\/\.]/.test(key)) {
    appendToDisplay(key); // Append the key to the display
  } else if (key === "Enter" || key === "=") {
    calculate(); // Calculate the result
  } else if (key === "Backspace") {
    clearDisplay(); // Clear the display
  } else if (key === "Escape") {
    clearDisplay(); // Clear the display (optional)
  }
});
