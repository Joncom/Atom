ig.module('game.entities.electron')

.requires('impact.entity')

.defines(function() {

    EntityElectron = ig.Entity.extend({

        size: {
            x: 26,
            y: 26
        },

        // Speed multiplier.
        speed: 10,

        // Path dimensions.
        pathWidth: 240,
        pathHeight: 60,

        animSheet: new ig.AnimationSheet('media/electron.png', 26, 26),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

            // Set current animation.
            this.addAnim('static', 0.1, [0]);

            // Start the timer.
            this.timer = new ig.Timer();

            // Desyncronize siblings.
            this.timer.set( -Math.random() * 10 );

            // Assign a random angle IF an angle is not provided.
            if( typeof( this.angle ) !== 'number' ) this.angle = Math.random() * 360;

            // Report problem if no container is defined.
            if( typeof( this.container ) === 'undefined' ) {

                console.debug('Killing EntityElectron because no container was defined.');

                this.kill();
            }

        },

        update: function() {

            this.parent();

            this.angleRadians = this.angle * ( Math.PI / 180 );

            var theta = this.timer.delta() * this.speed;

            // Get position along elliptical path.
            var x = Math.cos( theta ) * ( this.pathWidth / 2 );
            var y = Math.sin( theta ) * ( this.pathHeight / 2 );

            // Set entity behind and in-front based on path position.
            if( y >= 0 ) this.zIndex = this.container.zIndex;
            else this.zIndex = this.container.zIndex + 2;

            // Rotate the ellipse.
            var newX = x * Math.cos( this.angleRadians ) - y * Math.sin( this.angleRadians );
            var newY = x * Math.sin( this.angleRadians ) - y * Math.cos( this.angleRadians );

            // Update position of entity.
            this.pos.x = this.container.pos.x + ( this.container.size.x / 2 ) + newX - ( this.size.x / 2 );
            this.pos.y = this.container.pos.y + ( this.container.size.y / 2 ) + newY - ( this.size.y / 2 );

        }

    });
});