const gameContainer = document.getElementById("game");
let score= document.getElementById("score")
let counter=0
let scoreCount=0


let firstCard;
let secondCard;
let firstId;
let secondId;

//change for commit
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.style.backgroundColor="";
    newDiv.setAttribute("id",Math.floor(Math.random()*1000))

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  
  }
}



// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked

    const div=document.querySelectorAll("div")
    
    const reset=setTimeout(function(){
      for(let i=0; i<div.length;i++){
        if( div[i].className !== "matched"){
          div[i].style.backgroundColor=""
          }
        }counter = 0
        valueArray=[]
        idArray=[]
        
    },1000)
   
    if(counter===0){
      firstCard=event.target.className
      firstId= event.target.id}
    
    
    if(counter<2){
      event.target.style.backgroundColor= event.target.className;
   
    }
    
    if(counter===1){
      
      secondCard=event.target.className;
      secondId=event.target.id;
      console.log(firstCard===secondCard)
      if(firstId===secondId){
        reset;} 
      else if(firstCard===secondCard){
      let match=document.querySelectorAll("."+event.target.className)
      for(let i=0; i<match.length; i++){

        match[i].className="matched"
        console.log(match[i].className)
        }
      }
      scoreCount++
      score.innerText= `Score: ${scoreCount}`
  }
    if(counter>0 && firstCard!==secondCard){
      
      reset;
    }
      
  counter++; 
}
 

    
    
   
  
  
   
  
  
  


// when the DOM loads
createDivsForColors(shuffledColors);

/* */