ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'game.entities.atom',
    'game.entities.nucleus',
    'game.entities.electron',
    'impact.debug.debug'
)
.defines(function(){

MyGame = ig.Game.extend({

    init: function() {

        // Initialize your game here; bind keys etc.

    },

    update: function() {

        // Update all entities and backgroundMaps
        this.parent();

    },

    draw: function() {

        // Draw all entities and backgroundMaps
        this.parent();

    }

});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});
