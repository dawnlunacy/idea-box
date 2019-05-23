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


function createNewCard() {
  var newCard = new IdeaCreator(titleInput.value, bodyInput.value)
  newCard.saveToStorage();
  console.log(newCard)
  var cardToAppend = 
  `  <article class="card-display"> 
    <body>
    <header>
      <img src='images/star.svg' class="star-default">
      <img src='images/star-active.svg' class="star-active" onclick="">
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






