//create a class idea
class IdeaCreator {
  constructor(title, body){
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = 'Swill';
  }
  .saveToStorage(){

  }

}:
//have a constructor to create more instances of the class ie objects
//set key of property to have a value of title
//set key of property to have a value of body
// set key property for star to have a default value of false
// set key property for Quality to have a default value of: "Swill"

//will need a function to save to storage saveToStorage (local storage)
  //will need to obtain a value from the dom and be assigned to a key
  //will need key:value pair for title
  //will need key:value pair for body
  // will need key:value pair for quality
  //will need default value for property of star to be false- key value pair
  //then take that key value pair and turn into a JSON object (stringify it)
  // set JSON object to variable to prep for storage
  //then use localstorage.setItem to set key value pair from JSON

//updateIdea
  //retrieve JSON from localStorage (localStorage.getItem) 
  //parse JSON object to become its original JS data *key-value pair*
  //access the array of properties for that JSON Object
  //manipulate or edit the array but utilizing array prototype methods
    //invoke save to storage function

//deletefromStorage
  //invoke update idea to manipulate data
  //use localStorage.removeItem([key]) to update local storage

//update quality
 //we think first use updateIdea
 //then use the splice array protoype method to chage the value of the key for the property of quality


 

  



