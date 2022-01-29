class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    
  }
  hide(){
    this.greeting.hide()
    this.input.hide()
    this.playButton.hide()

  }
  display(){
    this.setElementsbyPosition()
    this.setElementsbyClass()
    this.handleMousePressed()
  }
  setElementsbyPosition(){
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
 
  
  }
  setElementsbyClass(){
    this.playButton.class("customButton")
    this.input.class("customInput")
    this.greeting.class("greeting")
    
  }
  handleMousePressed(){
    
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
    
      this.greeting.html(message)
      playerCount +=1
      player.index = playerCount;
      player.name = this.input.value()
      player.addPlayer()
      player.updateCount(playerCount)
      
    })
  }
  
}
