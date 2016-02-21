
(function() {
      console.log("Developed By Victor Bolinches Marin - February 2016");
      console.log("Welcome to Street Fighter 1 for Web"); 
})();


window.onload = function() {   
      game = new Phaser.Game( 800, 600, Phaser.AUTO, "Street Fighter 1 for Web", false, false);
      var streetFighter1 = new StreetFighter1();
      game.state.add(INTRO, streetFighter1);
      game.state.start(INTRO);
};


