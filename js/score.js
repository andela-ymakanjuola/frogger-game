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
		ctx.rect(0,5, 100, 40);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.font = '20pt Helvetica';
		ctx.fillStyle = 'red';
		ctx.fillText("Lives: "+lives, 0, 30);
	}

	window.Score = {
		update: update,
		updateLives: updateLives
	};

})();