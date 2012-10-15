ig.module('game.entities.electron')

.requires('impact.entity')

.defines(function() {

	EntityElectron = ig.Entity.extend({

		size: {
			x: 26,
			y: 26
		},

		// Pixels per second to travel.
		speed: 30,

		// Angle-rotation of orbit path in degrees.
		angle: 0,

		pathWidth: 240,

		pathHeight: 60,

		timer: null,

		animSheet: new ig.AnimationSheet('media/electron.png', 26, 26),

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			this.addAnim('static', 0.1, [0]);
			this.currentAnim = this.anims['static'];

			// Start the timer.
			this.timer = new ig.Timer();
		},

		update: function() {
			this.parent();
		},

		draw: function() {

			if( this.currentAnim ) {

				var pointX = Math.cos( this.timer.delta() ) * ( this.pathWidth / 2 );
				var pointY = Math.sin( this.timer.delta() ) * ( this.pathHeight / 2 );

				this.currentAnim.draw(
					this.pos.x - this.offset.x - ig.game._rscreen.x + pointX,
					this.pos.y - this.offset.y - ig.game._rscreen.y + pointY
				);
			}
		}

	});
});