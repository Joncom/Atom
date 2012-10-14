ig.module('game.entities.atom')

.requires('impact.entity')

.defines(function() {

	EntityAtom = ig.Entity.extend({

		size: {
			x: 16,
			y: 16
		},

		//animSheet: new ig.AnimationSheet('media/entity-icons.png', 16, 16),

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			// Create nucleus.
			ig.game.spawnEntity( EntityNucleus, 0, 0, {} );

			// Create electrons.
			for( var i=0; i<3; i++ ) {

				ig.game.spawnEntity( EntityElectron, 0, 0, {} );

			}

			//this.addAnim('weltmeister', 0.1, [0]);
			//this.currentAnim = this.anims.weltmeister;
		},

		update: function() {
			this.parent();
		}


	});
});