//savvy-pics
//vivienne- extra lives + start background

var game = game || {};

game = new Phaser.Game(800, 600, Phaser.AUTO, 'cont');

//Main Menu Code
game.MainMenu = function() {};
//buttonstuff
var button;

//for formatting text
var factstyle = { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }

function menutolevelone () {
	game.state.start('LevelZero2LevelOne')
    }

///////////////////////////////////

game.MainMenu = {
    preload: function() {
		this.load.image('button', "assets/images/startbutton.gif")
		this.load.image('startbackground', "assets/images/startbackground.jpg")

   },
    create: function() {
        game.add.tileSprite(0, 0, 800, 600, 'startbackground');
        button = game.add.button(200, 400, 'button', menutolevelone, this, 2, 1, 0);
    },
    update: function() {
    	}
	};


/////////////////////////////////////////////

game.LevelZero2LevelOne = function() {};
var button6;
var factsone = ['1fact1','1fact2','1fact3','1fact4','1fact5','1fact6','1fact7']
var factsonepics = ['threatened', 'bycatch', 'carbon', 'searise', 'species', 'travel', 'leatherback', 'gender']
var randfact1 = Math.floor(Math.random() * factsone.length);

var sentScore = false;
function changefact0tolevelone () {
    game.state.start('LevelOne')
    }
game.LevelZero2LevelOne = {
	preload: function(){
        this.load.image('1fact1', "assets/images/1fact1.png")
    	this.load.image('1fact2', "assets/images/1fact2.png")
    	this.load.image('1fact3', "assets/images/1fact3.png")
    	this.load.image('1fact4', "assets/images/1fact4.png")
    	this.load.image('1fact5', "assets/images/1fact5.png")
    	this.load.image('1fact6', "assets/images/1fact6.png")
    	this.load.image('1fact7', "assets/images/1fact1.png")
    	this.load.image('button6', "assets/images/nextbutton.png")
    	this.load.image('threatened', "assets/images/threatened.png")
    	this.load.image('bycatch', "assets/images/bycatch.png")
    	this.load.image('carbon', "assets/images/carbon.png")
    	this.load.image('searise', "assets/images/searise.png")
    	this.load.image('species', "assets/images/species.jpg")
    	this.load.image('travel', "assets/images/travel.png")
    	this.load.image('leatherback', "assets/images/leatherback.png")
    	this.load.image('gender', "assets/images/gender.png")
	},

    create: function() {
        game.add.tileSprite(0,0,800,600, factsonepics[randfact1]);
        game.add.tileSprite(0, 490, 800, 110, factsone[randfact1]);
        button = game.add.button(310, 400,'button6', changefact0tolevelone, this, 3, 1, 0);

    },
    update: function() {
    	}
	};

/////////////////////////////////////////////
// *==============================================
//    INSERT GAME CODE HERE
//   ==============================================*/

game.LevelOne = function() {};

var ocean;

var backgroundv;

var jellyspeedlist = [];
var jellylist = [];
var baglist = [];
var score = 0;
var livesList = [];
var lives = 5;
var highscore = 0;
var bagspeedlist = []
var globalHighScore = 0;
var moreLivesList = []
var moreLifeSpeedlist = []

var avatar;

game.LevelOne = {
	preload: function(){
		game.load.image('ocean', "assets/images/background.png");
		game.load.image('bag', "assets/images/bag.png")
		game.load.image('heart', "assets/images/heart.png")

		game.load.spritesheet('jellyfish', 'assets/images/jellysprite.png', 41.75, 60, 4);
		game.load.spritesheet('player', 'assets/images/turtlesprite.png', 84, 63, 6);
	},
    create: function(){
        oceany = game.add.tileSprite(0,0,800,600,'ocean');
        backgroundvy  =  2;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //jelly code
        for (i=0; i<15; i++){
            this.jellydude = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'jellyfish');
            this.jellydude.worldvisible =  true;
            this.physics.enable(this.jellydude, Phaser.Physics.ARCADE);
            this.jellydude.visible =  true;
            jellylisty.push(this.jellydude);
            this.jellyspeed = Math.floor(Math.random()*7) + 5;
            jellyspeedlisty.push(this.jellyspeed);
            

        }
        //bag code
        for (i=0; i<5; i++){
            this.plasticbag = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'bag');
            baglisty.push(this.plasticbag);
            this.bagspeed = Math.floor(Math.random()*7) + 5;
            bagspeedlisty.push(this.bagspeed);
            this.physics.enable(this.plasticbag, Phaser.Physics.ARCADE);
            console.log("ADDED ONE")
        }
        for (i=0; i<5; i++){
            this.life = this.game.add.sprite(80+30*i,64, 'heart');
            livesListy.push(this.life);
        }
        for (i=0; i<3; i++){
            this.morelife = this.game.add.sprite(700 + Math.floor((Math.random() * 500) + 200), Math.floor(Math.random()*580), 'heart');
            this.physics.enable(this.morelife, Phaser.Physics.ARCADE);
            this.morelifespeed = Math.floor(Math.random()*5) + 2;
            this.morelife.body.allowGravity = false;
            moreLifeSpeedlisty.push(this.morelifespeed);
            moreLivesListy.push(this.morelife);
        }
        avatar = game.add.sprite(150, 300, 'player');
        avatar.scale.x *= -1; 
        var walk = avatar.animations.add('walk');
        this.physics.enable(avatar, Phaser.Physics.ARCADE);
        avatar.animations.play('walk', 5, true);
        
        scoreText = this.add.text(16, 16, 'Score: ' + scorey, { fontSize
        : '22px', fill: '#000' });
        hiscoreText = this.add.text(16, 40, 'High Score: ' + localStorage.getItem('highscore'), { fontSize
        : '22px', fill: '#000' });
        liveText = this.add.text(16, 64, 'Lives: ', {fontSize: '22px', fill: '#000'});
    },
    update: function(){
        if (livesy == 0){

            game.state.start('END');
        }
        globalHighScore = scorey;

        if (scorey > localStorage.getItem("highscore")) {                
            localStorage.setItem("highscore", scorey);   
            hiscoreText.text = 'High Score: ' + localStorage.getItem("highscore");   
        }

        oceany.tilePosition.x -= backgroundvy;
        //jelly code
        for (i=0; i<15; i++){
            jellylisty[i].worldvisible = true;
            jellylisty[i].visible = true;
            if (this.physics.arcade.collide(jellylisty[i], avatar)){
                jellylisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylisty[i].y =Math.floor(Math.random()*580);
                jellyspeedlisty[i] = Math.floor(Math.random()*7) + 5;
                scorey +=1;
                scoreText.text = 'Score: ' + scorey;
                if (scorey == 250){
                    game.state.start('END')
                }

            }

            if (jellylisty[i].x < -100){
                jellylisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                jellylisty[i].y =Math.floor(Math.random()*580);
                jellyspeedlisty[i] = Math.floor(Math.random()*7) + 5;
            }
            else{
                jellylisty[i].x = jellylisty[i].x - jellyspeedlisty[i];

            }
        }
        //bag code
        for (i=0; i<5; i++){
            if (this.physics.arcade.collide(baglisty[i], avatar)){
                baglisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                baglisty[i].y = Math.floor(Math.random()*580);
                bagspeedlisty[i] = Math.floor(Math.random()*7) + 5;
                livesy -= 1;
                livesListy[livesy].destroy();
            }

            if (baglisty[i].x < -220){
                baglisty[i].x = 700 + Math.floor((Math.random() * 500) + 200);
                baglisty[i].y = Math.floor(Math.random()*580);
                bagspeedlisty[i] = Math.floor(Math.random()*7) + 5;
            }
            else{
                baglisty[i].x = baglisty[i].x - bagspeedlisty[i];

            }
        }
        for (var j = 0; j < moreLivesListy.length; j++) {
            moreLivesListy[j].x = moreLivesListy[j].x - moreLifeSpeedlisty[j];

            if (moreLivesListy[j].x < -100){
                moreLivesListy[j].x = 700 + Math.floor((Math.random() * 500) + 200);
                moreLivesListy[j].y = Math.floor(Math.random()*580);
                moreLifeSpeedlist[j] = Math.floor(Math.random()*5) + 2;
            }

            game.physics.arcade.overlap(avatar, moreLivesListy[j], function() {
                (moreLivesListy[j]).destroy();
                moreLivesListy.splice(j, 1);
                newlife = this.game.add.sprite(80+30*livesy,64, 'heart');
                livesListy.splice(livesy, 0, newlife)
                livesy += 1;
                moreLifeSpeedlisty.splice(j, 1);
                j--;
            } , null, this);
        }
        if ((game.input.keyboard.isDown(Phaser.Keyboard.ENTER) || game.input.keyboard.isDown(Phaser.Keyboard.Q)) && avatar.y >= -5){
                avatar.y -= 4;
        }
        else if ((game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)) && avatar.y <= 560){
            avatar.y += 4
        }
    }
    };

//GAME END STAGE CODE
game.END = function() {};

var button3;

function gametogame () {
	sentScore =  false;

	game.state.start('LevelZero2LevelOne')
    }

game.END = {
    preload: function() {
		this.load.image('button3', "assets/images/nextbutton.png")
		this.load.image('banner', "assets/images/banner.png")
		this.load.image('end', "assets/images/end.jpg")
	},
	
    create: function() {
        this.game.add.tileSprite(0, 0, 800,600,'end')
        this.playagain = this.game.add.sprite(game.world.centerX, 200, 'banner');
        this.playagain.anchor.setTo(0.5)
        button3 = game.add.button(310, 400, 'button3', gametogame, this, 3, 1, 0);

    },
    update: function() {
    		if (!sentScore) {
				sentScore = true;
			
	    		$.ajax({
				  type: "POST",
				  url: "https://localhost:8000/set/",
				  data: {username: person, scores: globalHighScore},
				  success: function(resp) {
				  	console.log(resp)
				  
				  }
				});
			}
			
    		lives = 5
    		jellylist = []
    		baglist = []
    		livesList = []
    		moreLivesList = []
    		score = 0
    		moreLivesListx = []
    		livesx=5
    		livesListx=[]
    		jellylistx = []
    		baglistx = []
    		scorex = 15
    		livesy=5
    		moreLivesListy = []
    		livesListy =[]
    		jellylisty = []
    		baglisty = []
    		scorey = 100
    		highscore = localStorage.getItem('highscore')
    		randfact1 = Math.floor(Math.random() * factsone.length);
    		rand3 = Math.floor(Math.random() * factsthree.length);
    		randfact2 = Math.floor(Math.random() * factstwo.length);
    		
    	}
	};

game.state.add('MainMenu', game.MainMenu);
game.state.add('LevelZero2LevelOne', game.LevelZero2LevelOne)
game.state.add('LevelOne', game.LevelOne);
game.state.add('LevelOne2LevelTwo', game.LevelOne2LevelTwo)
game.state.add('LevelTwo', game.LevelTwo)
game.state.add('LevelTwo2LevelThree', game.LevelTwo2LevelThree)
game.state.add('LevelThree', game.LevelThree)
game.state.add('END', game.END);
game.state.start('MainMenu');
