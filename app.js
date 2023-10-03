// // var name = window.prompt("Please enter your name");
// // while (name == null || name == "") {
// //     name = window.prompt("Please enter your name");
// //   }  
  
// //   var gender;


// //   function greetUser() {
    

// //     while (gender !== "male" && gender !== "female" && gender !== "Male" && gender !== "Female") {
// //       gender = window.prompt("Please enter your gender, Male or Female");
// //     }
  
// //     if (gender === "Male" || gender === "male") {
// //       window.alert("Mr " + name + ",\nWelcome to our family");
// //     } else if (gender === "Female" || gender === "female") {
// //       window.alert("Ms " + name + ",\nWelcome to our family");
// //     } else {
// //       window.alert(name + " welcome to our family");
// //     }
// //   }
// //   greetUser();



  
// // var drink = window.prompt(name +" do you want a hot or cold drink ?");

// // while(drink == null || drink==""){
// //     drink = window.prompt(name +" do you want a hot or cold drink ?");
// // } 

// // var DrinkWant = window.prompt("Please write the name of the drink you want");
// // while (DrinkWant == null || DrinkWant == "") {
// //     DrinkWant = window.prompt("Please write the name of the drink you want");
// // }

// // window.alert("The " + DrinkWant+ " is being prepared");

// //  const data = [name,gender,drink,DrinkWant];
// //  for( i=0 ; i<data.length ; i++){
// //     console.log(data[i]);
// //  }

// // //console.log("Your Name: "+ name + "\nYour order: " + DrinkWant);




// // let Age = window.prompt("Enter Your Age")



// // let divElements  = document.getElementById("info");

// // let paragraphElement  = document.createElement("p");
// // paragraphElement.innerHTML=name;



// // let ulElement  = document.createElement("ul");
// // let li1  = document.createElement("li");
// // let li2  = document.createElement("li");
// // let li3  = document.createElement("li");

// // li1.innerHTML=`Gender: ${gender}`;
// // li2.innerHTML=`Age: ${Age}`;
// // li3.innerHTML=`Drink: ${DrinkWant}`;

// // ulElement.appendChild(li1);
// // ulElement.appendChild(li2);
// // ulElement.appendChild(li3);
// // divElements.appendChild(paragraphElement)

// // divElements.appendChild(ulElement);


// // document.body.appendChild(divElements)




//Event

// let save = document.querySelector("#sub");
// var newParagraph = document.createElement('div');
// var newList = document.createElement('ul');
// var newListItem1 = document.createElement('li');
// var newListItem2 = document.createElement('li');
// var newListItem3 = document.createElement('li');
// var newListItem4 = document.createElement('li');

// newParagraph.innerHTML ="User Info";



// save.addEventListener("click", function(event){
//     event.preventDefault();
//     newListItem1.innerHTML = document.querySelector("input[name = name]").value;
//     newListItem2.innerHTML = document.querySelector("input[name = age]").value;
//     if(    newListItem3.innerHTML = document.querySelector("input[name = choose]").checked){
//       newListItem3.textContent="Hot"
//     }else{
//       newListItem3.textContent="Cold"
//     }
   
//     newListItem4.innerHTML = document.querySelector("input[name = drink]").value;
// });

// newList.appendChild(newListItem1);
// newList.appendChild(newListItem2);
// newList.appendChild(newListItem3);
// newList.appendChild(newListItem4);

// document.body.appendChild(newParagraph);
// document.body.appendChild(newList);