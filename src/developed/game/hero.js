////////////////////////////////////////////////////////////////////////////////////   BACKGROUND HERO

var Hero = function Hero(){
    this.getSprite = function(){ return this.sprite; };
    this.setSprite = function(sprite){ this.sprite = sprite; };

    this.getAnimation = function(){ return this.animation; };
    this.setAnimation = function(animation){ this.animation = animation; };

    this.getAnimationBack = function(){ return this.animationBack; };
    this.setAnimationBack = function(animationBack){ this.animationBack = animationBack; };

    this.getPromise = function(){ return this.promise; };
    this.setPromise = function(promise){ this.promise = promise; };
};

Hero.prototype.constructor = Hero;

Hero.prototype = {
    createSprite: function(){
        var sprite = game.add.sprite(290,210,ATLAS, "0.png");
        sprite.scale.setTo(2.0,2.75);
        this.setSprite(sprite);
    },
    animation: function(){
        var animation = this.getSprite().animations.add(HERO_ANIMATION,["0.png","1.png","2.png"],1, false);
        this.setAnimation(animation);
    },
    animationBack: function(){
        var animationBack = this.getSprite().animations.add(HERO_ANIMATION_BACK,["3.png"],1, false);
        animationBack.onStart.add(this.animationStarted, this);
        this.setAnimationBack(animationBack);
    },
    create: function() {
        this.createSprite();
        this.animation();
        this.animationBack();
    },
    animationStarted : function(sprite, _animation){
        this.setPromise(new Promise(function(resolved,rejected){ resolved(sprite); }) );
    }

};

