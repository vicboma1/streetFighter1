////////////////////////////////////////////////////////////////////////////////////   GAME ASSETS

var Assets = function Assets(audio){
    this.ATLAS_GAME = "assets/streetFighter1.png";
    this.ATLAS_JSON_HASH_GAME = "assets/streetFighter1.json";
    this.SOUND_PUNCH_WALL = "sound/punchWall.mp3";

    game.load.atlas(ATLAS, this.ATLAS_GAME,  this.ATLAS_JSON_HASH_GAME , Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    game.load.audio(PUNCH_WALL,this.SOUND_PUNCH_WALL );

    this.audio = audio;
};

Assets.prototype.constructor = Assets;

Assets.prototype = {
    create: function(){
        this.audio.create();
    }
};