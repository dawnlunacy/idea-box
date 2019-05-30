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
var hiddenMsg =document.querySelector('.hidden-msg')
var mobileMenuToggleStatus = false;
var ideas = []; 
 
window.addEventListener('load', reloadIdeas);
window.addEventListener('load', loadCards)
window.addEventListener('load', toggleHiddenMsg)
saveBtn.addEventListener('click',saveBtnHelper);
cardDisplayArea.addEventListener('click', cardBtnHelper);
cardDisplayArea.addEventListener('keyup', updateCardEnter);
titleInput.addEventListener('keyup', enableSave);
bodyInput.addEventListener('keyup', enableSave);
newQualityInput.addEventListener('keyup', enableNewQualityBtn);
cardDisplayArea.addEventListener('focusout', updateCard);

function toggleHiddenMsg() {
  if (ideas.length === 0) {
    hiddenMsg.innerText = "You are looking beautiful today! Anything on your mind? Create ideas above!";
    } else {
      hiddenMsg.innerText = " ";
    };
};
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
  console.log(idea);
};
function reloadIdeas() {
  var newIdeas = [];
  var oldIdeas = JSON.parse(localStorage.getItem('ideas'));
  oldIdeas.map(function(idea) {
    var newIdea = new Idea(idea.title, idea.body, idea.star, idea.quality, idea.id);
    newIdeas.push(newIdea);
  });
  ideas = newIdeas;
  toggleHiddenMsg();
};
function loadCards() {
  for(var i = 0; i < ideas.length; i++) {
    appendCard(ideas[i]);
  }; 
};
function cardBtnHelper(e) {
  if (e.target.classList.contains('star-btn')) {
    toggleStar(e);
  };
  if (e.target.classList.contains('delete-btn')) {
    deleteCardFromDom(e);
  };
};
function deleteCardFromDom(e) {
  e.target.closest(".card-display").remove();
  var cardIdentifier = e.target.closest(".card-display").getAttribute("data-id");
  var idea = new Idea;
  idea.deleteIdea(cardIdentifier)
  toggleHiddenMsg();
};
function enableNewQualityBtn() {
    if (newQualityInput.value === '' ){
        newQualityBtn.disabled = true;
    } else {
        newQualityBtn.disabled = false;
    };
};
function findIdeaIndex(cardId) {
  return ideas.find(function(idea) {
    return idea.id == cardId
  });
};
function getIdeafromArray(e) {
 var cardIdentifier = e.target.closest(".card-display").getAttribute("data-id");
 var targetCard = findIdeaIndex(cardIdentifier);
 return targetCard;
};
function toggleStar(e) {
  if (e.target.className === "star-btn"){
    var fetchCard = getIdeafromArray(e); 
  } ;
  fetchCard.updateStar();
  if(fetchCard.star) { 
      e.target.setAttribute("src", "images/star-active.svg" );
   } else {
        e.target.setAttribute("src", "images/star.svg" )
  };
    fetchCard.saveToStorage(ideas);
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
  toggleHiddenMsg();
};
function updateCard(e){
  if (e.target.className === "card-title" || e.target.className === "card-body") {
      var titleText = e.target.closest(".card-display").querySelector(".card-title").innerText;
      var bodyText = e.target.closest(".card-display").querySelector(".card-body").innerText;
      var fetchCard = getIdeafromArray(e);
      fetchCard.updateIdea(titleText, bodyText);
      fetchCard.saveToStorage(ideas);
  };
};
function updateCardEnter(e){
  if (e.keyCode === 13) {
      var titleText = e.target.closest(".card-display").querySelector(".card-title").innerText;
      var bodyText = e.target.closest(".card-display").querySelector(".card-body").innerText;
      e.target.blur();
      var fetchCard = getIdeafromArray(e);
      fetchCard.updateIdea(titleText, bodyText);
      fetchCard.saveToStorage(ideas);
  };

};

