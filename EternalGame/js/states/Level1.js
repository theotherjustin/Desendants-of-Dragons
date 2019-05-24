var Level1 = function(game){
	//define variables
	//var castle;
	var player;
};
Level1.prototype = {
	preload: function(){
		game.load.path = 'assets/img/';
		game.load.tilemap('Level1', 'Level1.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.spritesheet('tilesheet1', 'DeepForestTileset2.png', 16, 16);
	},
	create:function(){
		//castle tilesprite
		castle = game.add.tileSprite(0,-200,1920, 1080, 'Castle');
		this.map = game.add.tilemap('Level1');
		this.map.addTilesetImage('DeepForestTileset2', 'tilesheet1');
		this.map.setCollisionByExclusion([]);
		this.mapLayer = this.map.createLayer('Map Layout');
		//this.decoLayer = this.map.createLayer('Foliage');
		
		//prevent clipping
		game.physics.arcade.TILE_BIAS = 32;

		//instruction
		sign = game.add.sprite(0,620, 'key', 'sign');

		//add player
		player = new Player(game, 20, 500, 2, 1);
		game.add.existing(player);

	
		//this.oofers = game.add.audio('oof');
		
		//this.lazor = game.add.audio('lazor');
	},
	update:function(){
		//game.physics.arcade.collide(player, this.platformGroup);
		game.physics.arcade.collide(player, this.mapLayer);
		// if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			// this.main.stop();
			// this.timer.stop();
			// game.state.start('Play');
		// }
		//move to the next level
		
		if(player.x > 1280) {
			game.state.start('Level3');
		}
	}
};