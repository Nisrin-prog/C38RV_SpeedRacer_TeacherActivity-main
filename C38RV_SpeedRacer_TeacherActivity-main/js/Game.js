class Game {
  constructor() {}
 // I make a check to see what is the gameState in the database 
 // if the gameState = 0 (wait) . we start the game
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state){
    database.ref('/').update({
      gameState:state
    })
  }

  // I create a form and a player for  my current player 
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
    
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  play() {
    this.handleElements()
    Player.getPlayersInfo()
    if (allPlayers!== undefined){
      image(track,0,-height*5,width,height*6)
      var index = 0
      var y;
      for (var plr in allPlayers){
        index = index + 1
        y = height - allPlayers[plr].positionY;
        if(index = player.index){
          cars[index-1].x = allPlayers[plr].positionX
          cars[index-1].y = y
          
        }
      }
      this.handleKeyControls()
        }
    drawSprites()
  }
  handleKeyControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY +=10;
      player.update()
    }
  }
}