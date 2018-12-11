// exercise 1: 
console.log("This is exercise 1:")
// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

var likesToTravel = "true";

if (likesToTravel === "true") {
    console.log("Bon Voyage!");
} else {
    console.log("Enjoy your couch!");
}

// exercise 2: 
console.log("This is exercise 2:")
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "But have you tried fried pickles?" to the console.

var favoriteFood = "Fried Pickles";

if (favoriteFood === "Fried Pickles") {
    console.log("You have excellent taste!")
}
else {
    console.log("But have you tried fried pickles?");
}

//exercise 3:
console.log("This is exercise 3:")
// 3. Check Your Math
// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

if (1 + 1 > 5) {
    console.log("True Fact!");
} else {
    console.log("LIES!");
}

if (4 * 5 <= 20) {
    console.log("True Fact!");
} else {
    console.log("LIES!");
}

if (6 - 2 >= 0) {
    console.log("True Fact!");
} else {
    console.log("LIES!");
}


//exercise 4:
console.log("This is exercise 4:")
// 4. Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
// In index.html, copy and paste the following code:
// <h3 id="personal-greeting"></h3>
// Write a conditional that checks for the following:
// If the person's preferred language is English, print "Hello, [name]!" to the "#personal-greeting" element.
// If the person's preferred language is Spanish print "Hola, [name]!" to the "#personal-greeting" element.
// If their preferred language is French, print "Bonjour, [name]!" to the "#personal-greeting" element. (Hint: use document.querySelector and .innerHTML)

var personObject = {
    name: "Sydney",
    language: "Klingon"

}

if (personObject.language === "English") {
    console.log("preferred language is English");
    var langString = `Hello, ${personObject.name}!`
    document.querySelector("#personal-greeting").innerHTML = langString
}
else if (personObject.language === "Spanish") {
    console.log("preferred language is Spanish");
    var langString = `Hola, ${personObject.name}!`
    document.querySelector("#personal-greeting").innerHTML = langString
}
else if (personObject.language === "French") {
    console.log("preferred language is French");
    var langString = `Bonjour, ${personObject.name}!`
    document.querySelector("#personal-greeting").innerHTML = langString
}
else {
    console.log("That is not one of the choices");
    var langString = `Choose your language, ${personObject.name}!`
    document.querySelector("#personal-greeting").innerHTML = langString

}

//Exercise 5:
console.log("This is Exercise 5")
// 5. Grandma's Kitchen
// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them

var time = "7:00 pm"
var isHungry = false;

if (time === "7:30 am" && isHungry === true) {
    console.log("It's time for breakfast")

} else if (time === "12:00 pm" && isHungry === true) {
    console.log("It's time for lunch!")
} else if (time === "7:00 pm" && isHungry === true || time === "8:00 pm" && isHungry === true) {
    console.log("It's time for dinner")
} else if (isHungry === true) {
    console.log("It's time for a snack!")
} else {
    console.log("Have a cookie anyway!")
}

// exercise 6
console.log("This is exercise 6:")
// 6. Student Grades
// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

var grade = 65;

if (grade >= 70 && grade <=76){
    console.log("You got a D")
}else if (grade >= 77 && grade <=84){
    console.log("You got a C")

}else if (grade >= 85 && grade <=92){
    console.log("You got a B")

}else if (grade >= 93 && grade <=100){
    console.log("You got a A")
}
else {
    console.log("You are failing at life!")
}
    

// this is an addition to exercise 6  Have a matrix of student grades to report

var gradeObject ={

    Sydney: 98,
    Isaac: 95,
    Thomas: 75,
    George: 78

}


