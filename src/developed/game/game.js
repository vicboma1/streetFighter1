var game = null;
var INTRO = "intro";
var ATLAS = "atlas";
var HERO_ANIMATION = "heroAnimation";
var HERO_ANIMATION_BACK = "heroAnimationBack";
var WALL_ANIMATION = "wallAnimation";
var PUNCH_WALL = "punchWall";

////////////////////////////////////////////////////////////////////////////////////   CONTROLLER

var StreetFighter1 = function StreetFighter1() { 
}

StreetFighter1.prototype.constructor = StreetFighter1;

StreetFighter1.prototype = {
  preload: function (){
    this.banner = new Banner(new Utils());
   
    this.audio = new Audio();
    this.assets = new Assets(this.audio);

    this.wall =  new Wall(new Hero(), new Logo(), this.audio);
  },
  create: function() {
    this.assets.create();
    this.wall.create();
    this.banner.create();
  
    setTimeout(function(_this){ _this.soundDecoded(); }, 3000, this);              
  },  
  soundDecoded : function(){
    game.sound.setDecodedCallback(
          this.audio.getEffect(), function() {   
              this.wall.getAnimation().play(WALL_ANIMATION);
          }, this );
  },
  update: function() {
    this.wall.update();
    this.banner.update();
  },
  render : function(){
  },
  destroy: function() {
  }

};
