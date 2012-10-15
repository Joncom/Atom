ig.module('game.entities.atom')

.requires('impact.entity')

.defines(function() {

	EntityAtom = ig.Entity.extend({

		size: {
			x: 250,
			y: 250
		},

		// The number of electrons to spawn.
		children: 10,

		//animSheet: new ig.AnimationSheet('media/entity-icons.png', 16, 16),

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			// Create nucleus.
			ig.game.spawnEntity( EntityNucleus, 0, 0, { container: this } );

			// Create electrons.
			for( var i=0; i<this.children; i++ ) {

				ig.game.spawnEntity( EntityElectron, 0, 0, { container: this } );

			}

		},

		update: function() {
			this.parent();
		}


	});
});