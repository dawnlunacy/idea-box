var saveBtn = document.querySelector('.save-btn');
var newQualityBtn = document.querySelector('.new-quality-btn');
var starredIdeasBtn = document.querySelector('.starred-ideas-btn');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var cardDisplayArea = document.querySelector('#card-display-area');
var starBtn = document.querySelectorAll('.stars');
var ideas = JSON.parse(localStorage.getItem('ideas')) || [];
var newQualityInput = document.querySelector('#new-quality-input')
var hamburgerMenuElements = document.querySelectorAll('.hamburger-menu-element')
var hamburgerMenuInactive = document.querySelector('#menu-icon')
var mobileMenuToggleStatus = false;

 

window.addEventListener('load', loadCards);
saveBtn.addEventListener('click', saveBtnHelper);
titleInput.addEventListener('keyup', titleHelper);
bodyInput.addEventListener('keyup', bodyHelper);
newQualityInput.addEventListener('keyup', enableNewQualityBtn);
hamburgerMenuInactive.addEventListener('click', activateHamburgerMenu);

// starBtn.addEventListener('click', starredIdeasBtn)


function starredIdeasBtn(e){
  e.preventDefault();

};
function newQualityBtn(e){
  e.preventDefault();

};

function loadCards() {
  ideas.forEach(function(idea){
    appendCard(idea.title, idea.body);
  })
}

//for delete use filter

// var numbers = [1,2,1,1];

// var mappedNumbers = numbers.map(function(number){
//   if(number === 1){
//     return number+1;
//    }})

// var filteredNumbers = numbers.filter(function(number){
//   if(number === 1) {
//     return number;
//   }
// })


function appendCard(title, body) {
  var newCard = new Idea(title, body)
  var cardToAppend = 
  `  <article class="card-display"> 
    <body>
    <header>
      <img src='images/star.svg' class="stars star-default">
      <img src='images/star-active.svg' class="stars star-active" onclick="">
      <img src='images/delete.svg' class="delete-default">
      <img src='images/delete-active.svg' class="delete-active">
    </header>
    <h3 class="card-title">${title}</h3>
      <p class="card-body">${body}</p>
     <footer class="card-footer">
     <img src='images/upvote.svg' class="upvote-default">
     <img src='images/upvote-active.svg' class="upvote-active">
     <h5 class="card-footer">Quality: Swill</h5>
     <img src='images/downvote.svg' class="downvote-default">
     <img src='images/downvote-active.svg' class="downvote-active">
     </footer>
    </body>
  </article>`
  cardDisplayArea.insertAdjacentHTML('afterbegin', cardToAppend);
};

function titleHelper(){
	enableSave();

};

function bodyHelper(){
	enableSave();
};

function enableSave(){
	if (titleInput.value === '' || bodyInput.value === ''){
		saveBtn.disabled = true;
	} else {
		saveBtn.disabled = false;
	}
}

function clearNewCardFields(){
	if(saveBtn.disabled = true){
		titleInput.value = '';
		bodyInput.value = '';
	}
	
}

function enableNewQualityBtn(){
	if (newQualityInput.value === '' ){
		newQualityBtn.disabled = true;
	} else {
		newQualityBtn.disabled = false;
	}
}

function saveBtnHelper(e){
	e.preventDefault();
	var title = titleInput.value;
	var body = bodyInput.value;
	appendCard(title, body);
	saveCard(title, body)
	clearNewCardFields();
}

function saveCard(title, body) {
	var newCard = new Idea(title, body);
	ideas.push(newCard);
	newCard.saveToStorage(ideas);
}

function activateHamburgerMenu(){
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
}