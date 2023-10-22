const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.controller') //querySelectorAll will pick all the elements in this case all buttons from the html file :)

//Defining a globally accessible variable storing users' choice
let userChoice

//Defining a globally accessible variable storing users' choice
let computerChoice

//Defining a globally accessible variable storing users' choice
let resultShow

//Now conditioning what happens on the pick or click of each button

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
  userChoice =  e.target.id //assign the id of the clicked button to the userChoice variable 
  userChoiceDisplay.innerHTML = userChoice
  getComputerChoice()
  getResult()
//   $(".results").fadeIn();
console.log(userChoice.innerHTML)
}))

console.log(possibleChoices)

//Generating a computer choice 
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChoice ='Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'Paper'
    }
    
    computerChoiceDisplay.innerHTML = computerChoice
}

//Generating a result 
function getResult(){
    if (computerChoice === userChoice){
        resultShow =  `It's a Draw !`
    }
    if (computerChoice === 'Rock' && userChoice ==='Paper'){
        resultShow = `You Win !`
    }
    if ( computerChoice === 'Rock' && userChoice === 'Scissors'){
        resultShow = `You Lost !`
    }  
    if ( computerChoice === 'Paper' && userChoice === 'Scissors'){
        resultShow = `You Win !`
    }  
    if ( computerChoice === 'Paper' && userChoice === 'Rock'){
        resultShow = `You Lost !`
    }
    if ( computerChoice === 'Scissors' && userChoice === 'Paper'){
        resultShow = `You Lost !`
    }
    if ( computerChoice === 'Scissors' && userChoice === 'Rock'){
        resultShow = `You Win !`
    }

    resultDisplay.innerHTML = resultShow
    
}

//start game using jquery 
$(".start-btn").click(function(){
    $(".game-section").show();
    $(".start-btn").hide()
  })
