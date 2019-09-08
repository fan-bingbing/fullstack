var roster = []

function add(list, itemAdd){
  list.push(itemAdd)
}

function remove(list, itemRemove){
  for (var i = 0; i < list.length; i++) {
    if (list[i] === itemRemove){
      list.splice(i, 1)
    }
  }
}

//
//
function main(){
  var action = prompt("Please select an action add, remove, display or quit.")
  if (action === 'add'){
        add(roster, prompt("Input the name that you want to add: "))

        main()
      }
  else if (action === 'remove') {
      remove(roster, prompt("Input the name that you want to remove:"))

      main()
      }
  else if (action === 'display') {
        console.log(roster)
        main()
      }
  else if (action === 'quit'){
        alert("Thanks for visiting this site.");
        

  }
  else {
        console.log('wrong input');
        alert("Thanks for visiting this site.");

}
}

//
while (true) {
  var proceed = prompt("Would you like to start the roster web app? y/n");
  if (proceed === 'y'){
    main()
  }
  else{
    alert("Thanks for visiting this site.");
    break;
  }
}
