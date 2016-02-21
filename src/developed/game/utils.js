
////////////////////////////////////////////////////////////////////////////////////   BANNER UTILS

var Utils = function Utils( ){
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = 0x000000;
};

Utils.prototype.constructor = Utils;

Utils.prototype = {
    link : function(){
        window.open("https://twitter.com/vicboma1", "_blank");
    },
    gitLink : function(){
        window.open("https://github.com/vicboma1/streetFighter1", "_blank");
    },
    toBlink : function(element){
        var tweenToBlinkOn = game.add.tween(element)
            .to(
                { alpha: 1 },
                10,
                Phaser.Easing.Linear.None,
                true,
                700
            );

        tweenToBlinkOn.onComplete.addOnce(function(_element){
            tweenToBlinkOn.stop();
            game.tweens.remove(tweenToBlinkOn);

            var tweenToBlinkOff = game.add.tween(_element)
                .to(
                    { alpha: 0 },
                    10,
                    Phaser.Easing.Linear.None,
                    true,
                    700
                );

            tweenToBlinkOff.onComplete.addOnce(function(elem){
                tweenToBlinkOff.stop();
                game.tweens.remove(tweenToBlinkOff);
            }, this);
        }, this);
    },
};
