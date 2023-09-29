var name = window.prompt("Please enter your name");
while (name == null || name == "") {
    name = window.prompt("Please enter your name");
  }  
  
  var gender = window.prompt("Please enter your gender , Male or Female");
  while (gender == null || gender == "") {
    gender = window.prompt("Please enter your gender , Male or Female");
  }  
  if (gender == "Male" || gender=="male") {
    window.alert("Mr " + name +",\nWelcome to our family");
} else if (gender == "Female" || gender=="female") {
    window.alert("Ms " + name + ",\nWelcome to our family");
} else {
    window.alert(name + " welcome to our family");
}
var drink = window.prompt(name +" do you want a hot or cold drink ?");

while(drink == null || drink==""){
    drink = window.prompt(name +" do you want a hot or cold drink ?");
} 

var DrinkWant = window.prompt("Please write the name of the drink you want");
while (DrinkWant == null || DrinkWant == "") {
    DrinkWant = window.prompt("Please write the name of the drink you want");
}

window.alert("The " + DrinkWant+ " is being prepared");

console.log("Your Name: "+ name + "\nYour order: " + DrinkWant);



