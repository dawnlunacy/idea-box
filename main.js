var saveBtn = document.querySelector('.save-btn');
var newQualityBtn = document.querySelector('.new-quality-btn');
var starredIdeasBtn = document.querySelector('.starred-ideas-btn');
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var cardDisplayArea = document.querySelector('#card-display-area')
var starBtn = document.querySelectorAll('.stars')
 

saveBtn.addEventListener('click',saveBtnHelper)
starBtn.addEventListener('click', starredIdeasBtn)

function starredIdeasBtn(e){
  e.preventDefault();

};
function newQualityBtn(e){
  e.preventDefault();

};


function createNewCard() {
  var newCard = new IdeaCreator(titleInput.value, bodyInput.value)
  newCard.saveToStorage();
  var cardToAppend = 
  `  <article class="card-display"> 
    <body>
    <header>
      <img src='images/star.svg' class="stars star-default">
      <img src='images/star-active.svg' class="stars star-active" onclick="">
    </header>
    <h3 class="card-title">${titleInput.value}</h3>
      <p class="card-body">${bodyInput.value}</p>
     <footer>
      <h5 class="card-footer">Quality: Swill</h5>
     </footer>
    </body>
  </article>`
  cardDisplayArea.insertAdjacentHTML('afterbegin', cardToAppend);
};

function saveBtnHelper(e){
  e.preventDefault();
  createNewCard();
}






