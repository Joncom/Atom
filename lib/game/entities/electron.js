ig.module('game.entities.electron')

.requires('impact.entity')

.defines(function() {

	EntityElectron = ig.Entity.extend({

		size: {
			x: 26,
			y: 26
		},

		animSheet: new ig.AnimationSheet('media/electron.png', 26, 26),

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			this.addAnim('static', 0.1, [0]);
			this.currentAnim = this.anims['static'];
		},

		update: function() {
			this.parent();
		}


	});
});