// Clicker vars. set to zero
let clickerSecondOutput = 0;
let clickerThirdOutput = 0;

// Element variables targeted by id
const firstOutput = document.getElementById("boxTopRight");
const secondOutput = document.getElementById("box");
const thirdOutput = document.getElementById('box2');

// Messages targeted by id
const messageOne = document.getElementById("messageOne");
const messageTwo = document.getElementById("messageTwo");
const messageThree = "Would you like to delete this mess you have made?";

// Toggle message visibility (the .toggle method manipulates class objects)
function toggleMessage(element) {
	element.classList.toggle('hidden');
}

// Add the message that I have hidden via class in HTML
function addText() {
    // Create a new paragraph element
    const newMessage = document.createElement('p');
    newMessage.textContent = messageTwo.textContent; // Use the same text as messageTwo
    newMessage.className = 'message'; // Optional: Add a class for styling if needed
    secondOutput.appendChild(newMessage); // Append the new message to the secondOutput box
}

// Puts new block of text over existing text in box 2 which is on the bottom
function updateBoxTwo(message) {
	const updateMessage = document.createElement('p');
	thirdOutput.classList.add('largerText');
	thirdOutput.replaceChildren = updateMessage;
	thirdOutput.textContent = message;
}

// Here are the event listeners that toggle visibility upon clicking the DIVs by id 
firstOutput.addEventListener('click', () => toggleMessage(messageOne));
secondOutput.addEventListener('click', () => {
	clickerSecondOutput++;
	addText(messageTwo);
	console.log(clickerSecondOutput);
});

thirdOutput.addEventListener('click', () => {
	if (clickerSecondOutput >= 1) {
		updateBoxTwo(messageThree);
		clickerThirdOutput++;
		console.log(clickerThirdOutput);
	}
});

thirdOutput.addEventListener('click', () => {
	if (clickerThirdOutput > 1) {
	location.reload();
	}});
