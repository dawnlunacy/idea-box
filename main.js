var saveBtn = document.querySelector('.save-btn');
var newQualityBtn = document.querySelector('#new-quality-btn');
var starredIdeasBtn = document.querySelector('#starred-ideas-btn');
var titleInput = document.querySelector('#title-input')
var bodyInput = document.querySelector('#body-input')
var cardDisplayArea = document.querySelector('#card-display-area')
var newQualityInput = document.querySelector('#new-quality-input')
var starBtn = document.querySelector('.star-btn')
var deleteBtn =document.querySelector('.delete-btn')
var upvoteBtn =document.querySelector('.upvote-btn')
var downvoteBtn =document.querySelector('.downvote-btn')
var hamburgerMenuElements = document.querySelectorAll('.hamburger-menu-element')
var hamburgerMenuInactive = document.querySelector('#menu-icon')
var mobileMenuToggleStatus = false;
var ideas = [];
 

window.addEventListener('load', reloadIdeas);
window.addEventListener('load', loadCards)
saveBtn.addEventListener('click',saveBtnHelper);
cardDisplayArea.addEventListener('click', cardBtnHelper);
titleInput.addEventListener('keyup', enableSave);
bodyInput.addEventListener('keyup', enableSave);
newQualityInput.addEventListener('keyup', enableNewQualityBtn);
hamburgerMenuInactive.addEventListener('click', activateHamburgerMenu);

function enableSave() {
    if (titleInput.value === '' || bodyInput.value === ''){
        saveBtn.disabled = true;
    } else {
        saveBtn.disabled = false;
    };
};

function clearNewCardFields() {
    if(saveBtn.disabled = true){
        titleInput.value = '';
        bodyInput.value = '';
    };
};

function saveBtnHelper(e) {
  e.preventDefault();
  createIdea(e);
};

function createIdea(e) {
  var idea = new Idea(titleInput.value, bodyInput.value, false, 0, Date.now())
  ideas.push(idea)
  idea.saveToStorage(ideas)
  clearNewCardFields();
  appendCard(idea);
  console.log(idea)
};

function reloadIdeas() {
  var newIdeas = [];
  var oldIdeas = JSON.parse(localStorage.getItem('ideas'));
  oldIdeas.map(function(idea) {
    var newIdea = new Idea(idea.title, idea.body, idea.star, idea.quality, idea.id);
    newIdeas.push(newIdea);
  });
  ideas = newIdeas;
};

function loadCards() {
  for(var i = 0; i < ideas.length; i++) {
    appendCard(ideas[i])
  };
};

function cardBtnHelper(e) {
  if (e.target.classList.contains('star-btn')) {
    toggleStar(e)
  };
  if (e.target.classList.contains('delete-btn')) {
    deleteCardFromDom(e)
  };
};

function deleteCardFromDom(e) {
  e.target.closest(".card-display").remove();
  var cardIdentifier = e.target.closest(".card-display").getAttribute("data-id");
  var idea = new Idea;
  idea.deleteIdea(cardIdentifier)
}
function enableNewQualityBtn() {
    if (newQualityInput.value === '' ){
        newQualityBtn.disabled = true;
    } else {
        newQualityBtn.disabled = false;
    };
};

function activateHamburgerMenu() {
    if (mobileMenuToggleStatus === false){
            for (var i =0; i < hamburgerMenuElements.length; i++){
                hamburgerMenuElements[i].style.visibility = 'visible'        
        }
        mobileMenuToggleStatus = true;
    } else if (mobileMenuToggleStatus === true){
        for (var i =0; i < hamburgerMenuElements.length; i++){
                hamburgerMenuElements[i].style.visibility = 'hidden';
    }
        mobileMenuToggleStatus = false;
    }
};

// function starredIdeasBtn(e){
//   e.preventDefault();

// };
// function newQualityBtn(e){
//   e.preventDefault();

// };

function findIdeaIndex(cardId) {
  return ideas.find(function(idea) {
    return idea.id == cardId
  });
};

function toggleStar(e) {
  var cardIdentifier = e.target.closest(".card-display").getAttribute("data-id");
  var targetCard = findIdeaIndex(cardIdentifier);
  targetCard.updateStar();
    if(targetCard.star) { 
        e.target.setAttribute("src", "images/star-active.svg" );
    } else {
        e.target.setAttribute("src", "images/star.svg" )
    };
     targetCard.saveToStorage(ideas);
};

function appendCard({title, body, star, quality, qualitySelect, id}) {
  var starImg = star ? "images/star-active.svg" : "images/star.svg"
    console.log(starImg)
  var cardToAppend = 
  `  <article class="card-display" data-id=${id}>
    <body>
    <header>
    <input type="image" src=${starImg} class="star-btn" alt="star-button">
     <input type ="image" src="images/delete.svg" class="delete-btn" alt="delete-button">
    </header>
    <h3 class='card-title' contenteditable='true'>${title}</h3>
      <p class='card-body' contenteditable='true'>${body}</p>
     <footer>
     <input type='image' src='images/upvote.svg' class='upvote-btn' alt='upvote-button'>
     <h5 class='card-footer-text'>${qualitySelect[quality]}</h5>
     <input type='image' src='images/downvote.svg' class='downvote-btn' alt='downvote-button'>
     </footer>
    </body>
  </article>`
  cardDisplayArea.insertAdjacentHTML('afterbegin', cardToAppend);
};


//psuedocode for editing content -
// on update card- event-  var editedITem = e.target - var index = getcardid(e)- of edited item = title or body then update it with parameters 

