(function() {
	function update() {
		
		ctx.font = '20pt Helvetica';
		ctx.fillStyle = 'blue';
		ctx.fillText("Score: "+score, 400, 30);
	}

	function updateLives(){		
		for (var i = 0; i < lives; i++) {			
            ctx.drawImage(Resources.get('images/heart-small-white.png'), i * 40, 0);           
        }
	}
	function reset(){
		lives = 3;
		score = 0;
	}

	window.Score = {
		update: update,
		updateLives: updateLives,
		reset: reset
	};

})();