
(function() {
	ctx.font = '20pt Helvetica';
	ctx.fillStyle = 'blue';
	ctx.fillText("Score: "+score, 400, 30);	

	ctx.font = '20pt Helvetica';
	ctx.fillStyle = 'red';
	ctx.fillText("Lives: "+lives, 0, 30);
		
	function update(score) {
		ctx.beginPath();		
		ctx.rect(400,5, 100, 50);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.font = '20pt Helvetica';
		ctx.fillStyle = 'blue';
		ctx.fillText("Score: "+score, 400, 30);

	}

	function updateLives(lives){
		ctx.beginPath();		
		ctx.rect(0,5, 100, 50);
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