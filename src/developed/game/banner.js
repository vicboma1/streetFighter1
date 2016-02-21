////////////////////////////////////////////////////////////////////////////////////   VIEW BACKGROUND BANNER

var Banner = function Banner( utils ){
    this.RESET = 15;
    this.timer = null;
    this.VICBOMA = "vicboma2016.png";
    this.INSERT_COIN = "insertCoin.png";
    this.utils = utils;

    this.getVicboma = function(){ return this.vicboma; };
    this.setVicboma = function(vicboma){ this.vicboma = vicboma; };

    this.getInsertCoin = function(){ return this.insertCoin; };
    this.setInsertCoin = function(insertCoin){ this.insertCoin = insertCoin; };
};

Banner.prototype.constructor = Banner;

Banner.prototype = {
    create: function() {
        this.createVicboma();
        this.createInsertCoin();
    },
    createVicboma : function() {
        var vicboma = game.add.button(game.world.centerX-10, game.world.height - 15, ATLAS, this.utils.link, this, this.VICBOMA,this.VICBOMA,this.VICBOMA,this.VICBOMA);
        vicboma.anchor.set(0.5,1);
        this.setVicboma(vicboma);
    },
    createInsertCoin : function() {
        var insertCoin = game.add.button(game.world.centerX + 10, game.world.height - 85, ATLAS, this.utils.gitLink, this, this.INSERT_COIN,this.INSERT_COIN,this.INSERT_COIN,this.INSERT_COIN);
        insertCoin.anchor.set(0.5,1);
        this.setInsertCoin(insertCoin);
    },
    animationStarted : function(sprite, _animation){
        this.setPromise(new Promise(function(resolved,rejected){ resolved(sprite); }) );
    },
    update : function () {

        if(this.timer != null)
            return;

        var loops = 0;
        this.timer = game.time.create(false);
        this.timer.loop(1500, function(args) {

            if(loops == this.RESET ){
                this.timer.stop();
                game.state.start(INTRO);
            }

            this.utils.toBlink(args);
            loops++;

        }, this, this.getInsertCoin());

        this.timer.start();

    }

};