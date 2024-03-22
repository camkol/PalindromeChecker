// Get references to HTML elements
const userInput = document.getElementById("text-input"); // Input field for user input
const checkPalindromeBtn = document.getElementById("check-btn"); // Button to check palindrome
const resultDiv = document.getElementById("result"); // Div to display the result

// Function to check if a string is a palindrome
const checkForPalindrome = (input) => {
  const originalInput = input; // Store the original input for later output

  // If the input is empty, show an alert and return
  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Remove previous result from the result div
  resultDiv.replaceChildren();

  // Convert the input string to lowercase and remove non-alphanumeric characters
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

  // Check if the lowercase string is equal to its reverse to determine if it's a palindrome
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a palindrome.`;

  // Create a paragraph element to display the result message
  const pTag = document.createElement("p");
  pTag.className = "user-input"; // Add a class for styling
  pTag.innerHTML = resultMsg; // Set inner HTML of the paragraph with the result message
  resultDiv.appendChild(pTag); // Append the paragraph to the result div

  // Show the result by removing the 'hidden' class
  resultDiv.classList.remove("hidden");
};

// Event listener for the button click to check palindrome
checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value); // Call checkForPalindrome function with user input
  userInput.value = ""; // Clear the input field after checking palindrome
});

// Event listener for 'Enter' key press in the input field
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value); // Call checkForPalindrome function with user input
    userInput.value = ""; // Clear the input field after checking palindrome
  }
});
