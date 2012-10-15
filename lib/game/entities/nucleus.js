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
			this.currentAnim = this.anims['static'];
		}

	});
});