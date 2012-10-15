ig.module('game.entities.nucleus')

.requires('impact.entity')

.defines(function() {

    EntityNucleus = ig.Entity.extend({

        size: {
            x: 60,
            y: 60
        },

        animSheet: new ig.AnimationSheet('media/nucleus.png', 60, 60),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

            this.addAnim('static', 0.1, [0]);

            // Report problem if no container is defined.
            if( typeof( this.container ) === 'undefined' ) {

                console.debug('Killing EntityNucleus because no container was defined.');

                this.kill();
            }

            // Set zIndex according to container.
            this.zIndex = this.container.zIndex + 1;

        },

        update: function() {

            // Center this entity within containing entity.
            this.pos.x = this.container.pos.x + ( this.container.size.x / 2 ) - ( this.size.x / 2 );
            this.pos.y = this.container.pos.y + ( this.container.size.y / 2 ) - ( this.size.y / 2 );

        }

    });
});