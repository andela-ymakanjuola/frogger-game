(function() {
	function update() {
		ctx.beginPath();		
		ctx.rect(400,5, 100, 40);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.font = '20pt Helvetica';
		ctx.fillStyle = 'blue';
		ctx.fillText("Score: "+score, 400, 30);
	}

	function updateLives(){
		ctx.beginPath();		
		ctx.rect(0,0, 150, 50);
		ctx.fillStyle = "white";
		ctx.fill();
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