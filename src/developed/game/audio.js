
////////////////////////////////////////////////////////////////////////////////////   GAME AUDIO

var Audio = function Audio(){
    this.getEffect = function(){ return this.punchWall; };
    this.setEffect = function(punchWall){ this.punchWall = punchWall; };
};

Audio.prototype.constructor = Audio;

Audio.prototype = {
    play: function (){
        this.getEffect().play();
    },
    create: function (){
        this.setEffect(game.add.audio(PUNCH_WALL));
    }
};
