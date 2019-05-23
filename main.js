var saveBtn = document.querySelector('.save-btn');
var newQualityBtn = document.querySelector('.new-quality-btn');
var starredIdeasBtn = document.querySelector('.starred-ideas-btn');
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var cardDisplayArea = document.querySelector('#card-display-area')
 

saveBtn.addEventListener('click',saveBtnHelper)
// titleInput.addEventListener('keyup',****)





function starredIdeasBtn(e){

};
function newQualityBtn(e){

};




//goal: function that calls the saveToStorage function and prints card onto DOM called createNewCard

function createNewCard() {
  var newCard = new IdeaCreator(titleInput.value, bodyInput.value)
  newCard.saveToStorage();
  console.log(newCard)
  var cardToAppend = 
  `<article class="card-display">
    <body>
      <header>
      </header>
      <h3 class="card-title">${titleInput.value}</h3>
      <p class="card-body">${bodyInput.value}</p> 
      <footer>
      <h5 class="card-footer">quality:"Swill"</h5>
      </footer>
    </body>
  </article>`
  cardDisplayArea.insertAdjacentHTML('afterbegin', cardToAppend);
};

function saveBtnHelper(e){
  e.preventDefault();
  createNewCard();
}


      //invoke saveToStorage function
      //create new local variable with the html for new card (ensure star in included) called newCard
          //create template literal for the user input of title
          //create template literal for the user input of body
      //create a variable (start global, keep local if possible) for the html class of "card-container"
      //chain the javascript native method of insertAdjacentHTML with the parameters of ****'afterbegin'*** (test this with grid and flex properties), and newCard

      //set up template literals
          //initialize as global variable for title input (consider for refactoring)
          //initialize as global variable for body input (consider for refactoring)
          //pass these global variables through template literal notation with .value (look up correct terminology)
          





