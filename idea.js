//create a class idea
class Idea {
  constructor(title, body, star, quality, id){
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.quality = quality || 'Swill';
    this.id = id || Date.now();
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

    deleteIdea() {
      localStorage.removeItem(this.id);
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



 

  



