////////////////////////////////////////////////////////////////////////////////////   BACKGROUND LOGO

var Logo = function Logo(){
    this.LOGO = "logo.png";
    this.getSprite = function(){ return this.sprite; };
    this.setSprite = function(sprite){ this.sprite = sprite; };
};

Logo.prototype.constructor = Logo;

Logo.prototype = {
    create: function() {
        var sprite = game.add.sprite(0,0,ATLAS, this.LOGO);
        sprite.anchor.set(0.5);
        sprite.visible = false;

        this.setSprite(sprite);
    },
    animation : function(resolved){
        var sprite = this.getSprite();

        var tweenPositionLogo_01 = game.add.tween(sprite)
            .to(
                { x: game.world.centerX-10, y :game.world.centerY },
                10,
                Phaser.Easing.Linear.None,
                true,
                1200
            );

        tweenPositionLogo_01.onComplete.addOnce(function(_logo){
            sprite.scale.setTo(0.4);
            tweenPositionLogo_01.stop();
            game.tweens.remove(tweenPositionLogo_01);

            tweenPositionLogo_02.start();
        }, this);


        var tweenPositionLogo_02 = game.add.tween(sprite)
            .to(
                { x: game.world.centerX, y :game.world.centerY-sprite.height },
                10,
                Phaser.Easing.Linear.None,
                false,
                600
            );

        tweenPositionLogo_02.onComplete.addOnce(function(_logo){
            sprite.scale.setTo(0.9);
            tweenPositionLogo_02.stop();
            game.tweens.remove(tweenPositionLogo_02);

            tweenPositionLogo_03.start();

        }, this);


        var tweenPositionLogo_03 = game.add.tween(sprite)
            .to(
                { x: game.world.centerX, y :game.world.centerY - 110 },
                5,
                Phaser.Easing.Linear.None,
                false,
                600
            );

        tweenPositionLogo_03.onComplete.addOnce(function(_logo){
            sprite.scale.setTo(1.1);
            tweenPositionLogo_03.stop();
            game.tweens.remove(tweenPositionLogo_03);

            resolved("");

        }, this);
    }
};
