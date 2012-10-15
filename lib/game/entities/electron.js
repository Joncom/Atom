ig.module('game.entities.electron')

.requires('impact.entity')

.defines(function() {

	EntityElectron = ig.Entity.extend({

		size: {
			x: 26,
			y: 26
		},

		// Speed multiplier.
		speed: 5,

		// Angle-rotation of orbit path in degrees.
		angle: 270,

		pathWidth: 240,

		pathHeight: 60,

		timer: null,

		animSheet: new ig.AnimationSheet('media/electron.png', 26, 26),

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			// Set current animation.
			this.addAnim('static', 0.1, [0]);

			// Start the timer.
			this.timer = new ig.Timer();

			// Convert angle to radians to save CPU.
			this.angleRadians = this.angle * Math.PI / 180;
		},

		update: function() {
			this.parent();
		},

		draw: function() {

			if( this.currentAnim ) {

				var x = Math.cos( this.timer.delta() * this.speed ) * ( this.pathWidth / 2 );
				var y = Math.sin( this.timer.delta() * this.speed ) * ( this.pathHeight / 2 );

				// Rotate the ellipse.
				x = x * Math.cos( this.angleRadians ) - x * Math.sin( this.angleRadians );
				y = x * Math.sin( this.angleRadians ) - y * Math.cos( this.angleRadians );

				this.currentAnim.draw(
					this.pos.x - this.offset.x - ig.game._rscreen.x + x - ( this.size.x / 2 ),
					this.pos.y - this.offset.y - ig.game._rscreen.y + y - ( this.size.y / 2 )
				);
			}
		}

	});
});