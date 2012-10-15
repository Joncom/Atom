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

        // Spawn an atom in the center of the screen.
        this.atom = ig.game.spawnEntity(
            EntityAtom,
            ( ig.system.width / 2 ) - ( EntityAtom.prototype.size.x / 2 ),
            ( ig.system.height / 2 ) - ( EntityAtom.prototype.size.y / 2 ),
            { angle: 135 }
        );

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
