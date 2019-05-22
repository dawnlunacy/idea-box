// assign a global variable to the html class of 'save-btn' called saveBtn
// assign a global variable to the html class of 'new-quality-btn' called newQualityBtn
// assign a global variable to the html class of 'starred-ideas-btn' called starredIdeasBtn
var saveBtn = document.querySelector('.save-btn');
var newQualityBtn = document.querySelector('.new-quality-btn');
var starredIdeasBtn = document.querySelector('.starred-ideas-btn');
var titleInput = document.querySelector('.title-input.value')
var bodyInput = document.querySelector('.body-input.value')
var cardcontainer = document.querySelector('.card-container')

saveBtn.addEventListener('click',saveBtnHelper())
titleInput.addEventListener('keyup',****)
// add event listener on click to saveBtn that invokes the ---function---saveBtnHelper







//goal: function that calls the saveToStorage function and prints card onto DOM called createNewCard

function createNewCard() {
  saveToStorage()
  var newCard = new IdeaCreator(titleInput, bodyInput)


  var cardToAppend = 
  `<article class="card-display">
    <body>
      <header>
      </header>
      <h3 class="card-title">${titleInput}</h3>
      <p class="card-body">${bodyInput}</p> 
      <footer>
      <h5 class="card-footer">${this.quality}</h5>
      </footer>
    </body>
    
  </article>`
  cardContainer.insertAdjacentHTML('afterbegin', cardToAppend);
};

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
          





