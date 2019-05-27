var saveBtn = document.querySelector('.save-btn');
var newQualityBtn = document.querySelector('.new-quality-btn');
var starredIdeasBtn = document.querySelector('.starred-ideas-btn');
var titleInput = document.querySelector('.title-input')
var bodyInput = document.querySelector('.body-input')
var cardDisplayArea = document.querySelector('#card-display-area')
var starBtn = document.querySelector('.star-btn')
var deleteBtn =document.querySelector('.delete-btn')
var upvoteBtn =document.querySelector('.upvote-btn')
var downvoteBtn =document.querySelector('.downvote-btn')
var ideas = [];
 

window.addEventListener('load', loadCards);
saveBtn.addEventListener('click',saveBtnHelper);
cardDisplayArea.addEventListener('click', cardBtnHelper);

// if(e.target.classList.contains('.star-btn')) {
//   toggleStar();
// };

// starBtn.addEventListener('click', starredIdeasBtn)


function saveBtnHelper(e) {
  e.preventDefault();
  createIdea(e);
};



function createIdea(e) {
  var idea = new Idea(titleInput.value, bodyInput.value, false, 0, Date.now())
  ideas.push(idea)
  idea.saveToStorage(ideas)
  titleInput.value = " ";
  bodyInput.value = " ";
  appendCard(idea);
  console.log(idea)
};



// function starredIdeasBtn(e){
//   e.preventDefault();

// };
// function newQualityBtn(e){
//   e.preventDefault();

// };
function reloadIdeas() {
  if (JSON.parse(localStorage.getItem('ideas')) === null) {
      return;
  } else {
    var newIdeas = JSON.parse(localStorage.getItem('ideas')).map(function(array) {
      return new Idea(array.title, array.body, array.star, array.quality, array.id);
    });
    ideas = newIdeas

  };
};

function loadCards() {
  for(var i = 0; i < ideas.length; i++) {
    appendCard(ideas[i])
  };
};


function cardBtnHelper(e) {
  console.log("FUCKYOU")
  if (e.target.classList.contains('star-btn')){console.log("DAVID IS THE BEST")
    toggleStar(e)
  };
};

function toggleStar(e) {
  console.log("inthestaryo")
  var cardIdentifier = e.target.closest(".card-display").getAttribute("data-id");
  var targetCard = findIdeaIndex(cardIdentifier);
  targetCard.updateStar();
  console.log("herrroooo")
    if(targetCard.star) { 
        e.target.setAttribute("src", "images/star-active.svg" );
    } else {
        e.target.setAttribute("src", "images/star.svg" )
    };
     targetCard.saveToStorage();
};



function appendCard({title, body, star, quality, qualitySelect, id}) {
  // var newCard = new Idea(title, body)
  var starImg = star ? "images/star-active.svg" : "images/star.svg"
    // if(star === 'true'){
    //   return "images/star-active.svg"
    // } else {
    //   return "images/star.svg"
    // };
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
     <footer class='card-footer'>
     <input type='image' src='images/upvote.svg' class='upvote-btn' alt='upvote-button'>
     <h5 class='card-footer-text'>${qualitySelect[quality]}</h5>
     <input type='image' src='images/downvote.svg' class='downvote-btn' alt='downvote-button'>
     </footer>
    </body>
  </article>`
  cardDisplayArea.insertAdjacentHTML('afterbegin', cardToAppend);
};





function findIdeaIndex(cardId) {
  return ideas.find(function(idea) {
    return idea.id == cardId
  });





//then reset the title and body input to an empty string
//call the function to display your idea on a card and pass through the argument of the variable that is this new instance
// then disable the save 

// function saveCard(title, body) {
//   var newCard = new Idea(title, body)
//   ideas.push(newCard);
//   newCard.saveToStorage(ideas);
// };


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
// function toggleStar(e){
  

  // var starImg = false;
  // e.target.src.match('Images/star.svg') ? e.target.src ='Images/star-active.svg' : 
  // e.target.src ='Images/star.svg';
  // e.target.src.match('Images/star.svg') ? star = false : star = true;
// };

// function 

////**** Will need a function to toggle star 




//e.target.setAttribute(atributeyouwanttochange (src), the things you want to change it to (filepath) )
//with this function we will need an event listener to listen for when them starimg is clicked

//upon click - toggle imgs  -- see line 60//
    //still need to get this instance of this idea
    //need to match the idea of the card you are on
    //relying on event listener ( e.target.closest(".card-display").getAttribute(data-id))
    //declare a variable and assign to above e.target event and that new variable will be the id of that card
    //now go through entire array and find the one id that matches that new variable and pull it out 
    //(look into array protype called find) (nameofArray.find(callbackfunction)function(idea){
    //   return idea.data-id === varible you set 
    // })

  // make a function example Find Idea with a parameter.
  //  and then invoke it in the previous function and pass through as an argument the variable you created earlier to define the id/data attribute of the card you are now targeting
  //
  

  // inside the delcaration of the function write out callback function
// make the call back function that returns ONLY the idea  that matches the data attribute and then assign that to a new variable. 
//









  // var title = titleInput.value;
  // var body = bodyInput.value;
  // appendCard({title, body, star, quality, id});
  // saveCard(title, body)

//upon hitting save button
    //first instantiate an idea
    //pass the arguments for the parameters of that idea. 
    //pass that idea to your function to append card with that idea

    
    //page should not reload
    //idea should be pushed into the array(should persist through page load)





};