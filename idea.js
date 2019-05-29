class Idea {
  constructor(title, body, star, quality, id){
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.quality = quality 
    this.qualitySelect = ['Swill', 'Quality', 'Genius'];
    this.id = id;
  }
  
    saveToStorage(array) {
      localStorage.setItem('ideas', JSON.stringify(array));
    };

    updateIdea(thingToChange, change) {
      var retrieveIdea = localStorage.getItem(this.id);
      var parsedIdea = JSON.parse(retrieveIdea);
      parsedIdea[thingToChange] = change;  
      this[thingToChange] = change; 
      this.saveToStorage();
    };

    updateStar() {
      this.star = !this.star 
    };

    deleteIdea(cardIdentifier) {
      var updatedIdeas = ideas.filter(function(idea){
        if (idea.id !== parseInt(cardIdentifier)) {
          return idea
        }
        })
      ideas = updatedIdeas;
      this.storeIdea(ideas)
    };
      
    storeIdea(ideas){
    localStorage.setItem('ideas',JSON.stringify(ideas));
    };
};