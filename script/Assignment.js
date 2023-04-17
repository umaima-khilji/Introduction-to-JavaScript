// Task 1:
/*Calculate the zakat value, first, create a variable named "zakatPercentage" and
store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
named "userInput" and take the input from the user using the prompt. Make sure
the input value is of a type number by converting the input string to a number
using a suitable method. Then, create a variable named "result" and assign its value
to the multiplication of the zakat percentage and user input. Finally, use an alert
message to display the calculated zakat value. The message should look like this:
"Your zakat value is xxx".*/

var zakatPercentage = 0.025;
var userInput = +prompt("Enter your wealth amount.");
var result = userInput * zakatPercentage;
alert("Your zakat value is " + result);


// Task 2:
/*calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/

var familyMembers = +prompt("Enter the total number of family members:");
var method = +prompt("Choose a fitrah method: For  \n1 Aanaj press '1' \n2 Khajoor press '2' \n3 Badam press '3'");
// for Aanaj
if(method == 1){
    alert("Your family's total fitra for Aanaj is: "+(familyMembers*500));
}

//for Khajoor
else if(method == 2){
    alert("Your family's total fitra for Khajoor is: "+(familyMembers*800));
}
// for Badam
else if(method == 3){
    alert("Your family's total fitra for Badam is: "+(familyMembers*1500));
}

// invalid input
else{
    alert("Invalid Input Try again!")
}

///////////////////

// Task 3:
/*Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again.*/

let secretNumber = Math.floor((Math.random()*10));
// Ask the user to enter a guess
var guess = +prompt("Guess the number between 1 and 10");

// Check if the guess matches the secret number
if(secretNumber == guess){
    alert("Congratulations! You guessed the secret number")
}

else if(secretNumber < guess ){
    alert("Sorry, your guess is too high. Please guess again..")
}
else if(secretNumber == (guess+2) ){
    alert("Sorry, your guess is too high. Please guess again.")
}
else if(secretNumber > guess ){
    alert("Sorry, your guess is too low. Please guess again.")
}
else if(secretNumber == (guess-2) ){
    alert("Sorry, your guess is too low. Please guess again.")
}
// To display an error message for invalid input
else{
    alert(" please between 1 to 10 number.")
}

/////////////////

// Task 4:
/*Create a program that asks the user to enter a name, and then prints out the name
with the first letter capitalized (Make sure your name in capitalized case).*/


var userName = prompt("Enter your name:");

// Capitalize the first letter of the name
var capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);

// output of the capitalized name
console.log("Your name with the first letter capitalized is: " + capitalizedUserName);


/////////////////////////

// Task 5:
/*In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.
Make sure to use descriptive variable names and comment on your code for clarity.*/

// empty arrays
var contactNumbers = [];
var contactNames = [];

//number of inputs
var numberOfContacts =1;

//using for loop to run prompt for numberOfContacts
for (let i = 0; i < numberOfContacts; i++) {
  var InputNumber = prompt("Enter a contact number: ");
  let InputName = prompt("Enter a contact name: ");

  // Push contact number and name into array
  contactNumbers.push(InputNumber);
  contactNames.push(InputName);
}

//to display contact number and name in the console
//using for loop to display name and number 
console.log("Contact Numbers:");
for (let i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i]);
}

console.log("Contact Names:");
for (let i = 0; i < contactNames.length; i++) {
  console.log(contactNames[i]);
}

///////////////////

// Task 6:
/*Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining.*/


// Array for products
var products = ["Face Primer", "Foundation", "blush ", "moisturizer", "concealer"];

// user input
var productInput = +prompt("enter the position for Face Primer press '1', Foundation press '2', blush  press '3', moisturizer press '4' , concealer press '4'");


// Validate user input
    if(productInput ==1 || productInput < 5){
  // Removing product from array
  var removedProduct = products.splice(productInput - 1, 1);
  
  //To display removed item and remaining items in the array
  console.log("Removed items: " + removedProduct);
  console.log("Remaining items: " + products);
  console.log("Total Number of Remaining items: " + products.length);
}

else {
  console.log("Invalid position. Please enter a valid position.");
}



//////////////
// Task 7:
/*Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote.*/

// Ask user for nationality
var nationality = prompt("Enter your nationality:");

// Check nationality
if (nationality.toLowerCase() === "pakistani" || nationality.toLowerCase() === "indian" ){
    alert("You are eligible to vote! click 'Ok' to proceed further:")

// Ask user for gender, and age
    var gender = prompt("Please enter your gender Male or Female:");
    var age = +prompt("Please enter your age:");

  // Check gender and age
    if (gender.toLowerCase() === "male" && age > 18){
        alert("You are eligible to vote!");
    }
    else if(gender.toLowerCase() === "female" && age > 18){
        var maritalStatus = prompt("Are you married? Yes or No");
        if(maritalStatus == 'yes' || maritalStatus == 'Yes' || maritalStatus == 'YES'){
            alert("You are eligible to vote");
        }
        else{
            alert("You are not eligible to vote because you are unmarried")
        }

    }
    else{
        alert("You are not eligible to vote because your age is under 18")
    }

}
else{
    alert("You are not eligible to vote. your nationality is not pakistani or indian")
}


//////

// Task 8:
/*You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.
(Hint : Make sure it should not disturb the array that contains 15 players instead you have
to make a copy of this array)*/

var WorldCupSquad = ['Shadab', 'M.Rizwaan',  'Babar azam', 'Azhar Ali','Shoaib Akhtar', 'Haris Sohail', 'Shaeen Afridi', 'M.Amir','Ahmed Shehzaad', 'Imran Hashmi', 'Hassan Ali', 'Umer Akmal',  'M.Harris', 'Sarfaraz Ahmed', 'Imad Waseem', ];
var finalTeam = WorldCupSquad;

var removedPlayers = finalTeam.splice(Math.floor((Math.random()*15)), 11);
console.log(" Selected Final Players from WorldCupSquad for tomorrow's Match with India are:");
console.log(removedPlayers);
console.log(WorldCupSquad);




