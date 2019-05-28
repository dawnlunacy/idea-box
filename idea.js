//create a class idea
class Idea {
  constructor(title, body, star, quality, id){
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.quality = quality
    // this instance of quality should be assigned to the parameter of quality 
    this.qualitySelect = ['Swill', 'Quality', 'Genius'];
    // should have another key value pair as an array so that you can update by assigning this instance of quality to an index number - allowing you to change the quality based on the index
    //when you first instatiate the card, it will start at index 0 for the array to display the value swill (pass this as an argument on intial instantiation)
    //to call that array you index that array with the variable quality in the template literal inside of html in js 
    this.id = id;
  }
  
    saveToStorage() {
      localStorage.setItem('ideas', JSON.stringify(ideas));
    };

    updateIdea(thingToChange, change) {
      var retrieveIdea = localStorage.getItem(this.id);
      var parsedIdea = JSON.parse(retrieveIdea);
      parsedIdea[thingToChange] = change;  
      this[thingToChange] = change; 
      this.saveToStorage();
    }

    updateStar() {
      this.star = !this.star
    }

    deleteIdea(cardIdentifier) {
      var updatedIdeas = ideas.filter(function(idea){
        if (idea.id !== parseInt(cardIdentifier)) {
          return idea
        }
        })
      ideas = updatedIdeas;
      this.storeIdea(ideas)
    };
    

      // })
      // if(this.id === "data-id") {
      //   localStorage.removeItem(cardIdentifier);
      // } else {
      //   var newIdeas = JSON.parse(localStorage.getItem('ideas')).map(function(array) {
      //   return new Idea(array.title, array.body, array.star, array.quality, array.id);
      // });
      
    storeIdea(ideas){
    localStorage.setItem('ideas',JSON.stringify(ideas));
    };

      
    
};




//updateIdea
  //retrieve JSON from localStorage (localStorage.getItem) 
  //parse JSON object to become its original JS data *key-value pair*
  //access the array of properties for that JSON Object
  //manipulate or edit the array by utilizing array prototype methods
    //invoke save to storage function




//update quality
 //we think first use updateIdea
 //then use the splice array protoype method to chage the value of the key for the property of quality

 //**** DO LATTER***



 

  



