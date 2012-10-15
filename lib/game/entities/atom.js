ig.module('game.entities.atom')

.requires('impact.entity')

.defines(function() {

	EntityAtom = ig.Entity.extend({

		size: {
			x: 250,
			y: 250
		},

		//animSheet: new ig.AnimationSheet('media/entity-icons.png', 16, 16),

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			// Create nucleus.
			var nucleus_x = this.pos.x + ( this.size.x / 2 ) - ( EntityNucleus.prototype.size.x / 2 );
			var nucleus_y = this.pos.y + ( this.size.y / 2 ) - ( EntityNucleus.prototype.size.y / 2 );
			//ig.game.spawnEntity( EntityNucleus, nucleus_x, nucleus_y, {} );

			// Create electrons.
			for( var i=0; i<3; i++ ) {

				ig.game.spawnEntity( EntityElectron, 0, 0, { container: this } );

			}

			//this.addAnim('weltmeister', 0.1, [0]);
			//this.currentAnim = this.anims.weltmeister;
		},

		update: function() {
			this.parent();
		}


	});
});