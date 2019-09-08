var firstName = prompt("Hello and Welcome. Please enter your first name: ")
var lastName = prompt("Enter your last name: ")
var age = prompt("Enter your age: ")
var height = prompt("Enter your height: ")
var petName = prompt("Enter your pat's name: ")
alert("Thank you so much for the information!")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstName[0] === lastName[0]){
  nameCond = true
}else{
  nameCond = false
}
if(age > 20 && age < 30){
  ageCond = true
}else{
  ageCond = false
}
if(height > 170 && height < 180){
  heightCond = true
}else{
  heightCond = false
}
if(petName[petName.length-1] === "y"){
  petCond = true
}else{
  petCond = false
}

if(nameCond && ageCond && heightCond && petCond){
  console.log("you are a good man!");
}else{
  console.log("nothing to show here.");
}
