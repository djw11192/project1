//add variables for each chip and the deal button
//When deal button is clicked, move the chips to their correct location
//Create a players object with all players and their stats listed
//after each chip is dealt, add a player picture and add that player's value to the chip
//pop up an alert that tells the players This is a best of seven series and it's your turn when the possession arrow points to your side.  Player to go girst will alernate in a 2-2-1-1-1 fashion (this is for V2)
//if team has possession, make their chips clickable
//when clicked the player's stats will show in the sidebar
//sidebar will have a "play" button at the bottom, and if clicked it'll move to the other players turn
//when both players "play" a chip, evaluate the stat categories with weighted values and find the chip with the higher sum
//Add a point to the game score
//when sum of scores is 7(or all chips played) reset the board to play again. possession start the other side now



//make a constructor to create players
function MakePlayer(ppg, reb, ass, stl, blk, fg, ft, threes, tov, image){
  this.ppg = ppg;
  this.reb = reb;
  this.ass = ass;
  this.stl = stl;
  this.blk = blk;
  this.fg = fg;
  this.ft = ft;
  this.threes = threes;
  this.tov = tov;
  this.image = image;
  this.findWeightedSum = function(){
    return (ppg+(reb*1.5)+(ass*1.7)+(stl*3)+(blk*4.5)+(fg/10)+(ft/10)+(threes*3)+(tov*-1.5));
  }
}

var curry = new MakePlayer(30.1, 5.4, 6.7, 2.1, 0.2, 50.4, 90.8, 5.1, 3.3,'<img src="images/steph-curry.png"/>');
var durant = new MakePlayer(28.2, 8.2, 5, 1, 1.2, 50.5, 89.8, 2.6, 3.5, '<img src="images/durant.png"/>');
var harden = new MakePlayer(29, 6.1, 7.5, 1.7, 0.6, 43.9, 86, 2.9, 4.6, '<img src="images/harden.png"/>');
var westbrook = new MakePlayer(23.5, 7.4, 10.4, 2, 0.3, 45.4, 81.2, 1.3, 4.3, '<img src="images/westbrook.png"/>');
var towns = new MakePlayer(18.3, 10.5, 2, 0.7, 1.7, 54.2, 81.1, 0.4, 2.2, '<img src="images/towns.png"/>');
var leonard = new MakePlayer(21.2, 6.8, 2.6, 1.8, 1, 50.6, 87.4, 1.8, 1.5, '<img src="images/kawhi.png"/>');
var davis = new MakePlayer(24.3, 10.3, 1.9, 1.3, 2, 49.3, 75.8, 0.6, 2, '<img src="images/anthony davis.png"/>');
var lebron = new MakePlayer(25.3, 7.4, 6.8, 1.4, 0.6, 52, 73.1, 1.1, 3.3, '<img src="images/lebron.png"/>');
var cousins = new MakePlayer(26.9, 11.5, 3.3, 1.6, 1.4, 45.1, 71.8, 1.1, 3.8, '<img src="images/cousins.png"/>');
var giannis = new MakePlayer(16.9, 7.7, 4.3, 1.2, 1.4, 50.6, 72.4, 0.4, 2.6, '<img src="images/giannis.png"/>');
var whiteside = new MakePlayer(14.2, 11.8, 0.4, 0.6, 3.7, 60.6, 65, 0, 1.9, '<img src="images/whiteside.png"/>');
var green = new MakePlayer(14, 9.5, 7.4, 1.5, 1.4, 49, 69.6, 1.2, 3.2, '<img src="images/green.png"/>');
var wall = new MakePlayer(19.9, 4.9, 10.2, 1.9, 0.8, 42.4, 79.1, 1.5, 4.1, '<img src="images/john_wall.png"/>');
var george = new MakePlayer(23.1, 7, 4.1, 1.9, 0.4, 41.8, 86, 2.6, 3.3, '<img src="images/paul_george.png"/>');



var players = [curry, george, durant, wall, harden, green, westbrook, towns, whiteside, leonard, lebron,davis, cousins, giannis, ];

var randomize = function(){
  players.sort(function(a, b){
  return 0.5 - Math.random();
  });
}

var $chip1h = $('#chip1h');
var $chip2h = $('#chip2h');
var $chip3h = $('#chip3h');
var $chip4h = $('#chip4h');
var $chip5h = $('#chip5h');
var $chip6h = $('#chip6h');
var $chip7h = $('#chip7h');
var $chip1a = $('#chip1a');
var $chip2a = $('#chip2a');
var $chip3a = $('#chip3a');
var $chip4a = $('#chip4a');
var $chip5a = $('#chip5a');
var $chip6a = $('#chip6a');
var $chip7a = $('#chip7a');
var $deal = $('#button');




$deal.on('click',function(){
  randomize();
  $chip1h.attr(players[0]);
  $chip2h.attr(players[1]);
  $chip3h.attr(players[2]);
  $chip4h.attr(players[3]);
  $chip5h.attr(players[4]);
  $chip6h.attr(players[5]);
  $chip7h.attr(players[6]);
  $chip1a.attr(players[7]);
  $chip2a.attr(players[8]);
  $chip3a.attr(players[9]);
  $chip4a.attr(players[10]);
  $chip5a.attr(players[11]);
  $chip6a.attr(players[12]);
  $chip7a.attr(players[13]);

  moveChip1H();
})

var moveChip1H = function(){
  $chip1h.addClass('Hchips-dealt').animate({top: +40, right: +380}, moveChip2H)
}
var moveChip2H = function(){
  $(this).html($(this).attr('image'));
  $chip2h.addClass('Hchips-dealt').animate({top: +40, right: +270}, moveChip3H);
}
var moveChip3H = function(){
  $(this).html($(this).attr('image'));
  $chip3h.addClass('Hchips-dealt').animate({top: +40, right: +160}, moveChip4H);
}
var moveChip4H = function(){
  $(this).html($(this).attr('image'));
  $chip4h.addClass('Hchips-dealt').animate({top: +350, right: +395}, moveChip5H);
}
var moveChip5H = function(){
  $(this).html($(this).attr('image'));
  $chip5h.addClass('Hchips-dealt').animate({top: +350, right: +290}, moveChip6H);
}
var moveChip6H = function(){
  $(this).html($(this).attr('image'));
  $chip6h.addClass('Hchips-dealt').animate({top: +350, right: +185}, moveChip7H);
}
var moveChip7H = function(){
  $(this).html($(this).attr('image'));
  $chip7h.addClass('Hchips-dealt').animate({top: +350, right: +80}, moveChip1A);
}
var moveChip1A = function(){
  $(this).html($(this).attr('image'));
  $chip1a.addClass('Achips-dealt').animate({top: +40, left: +380}, moveChip2A);
}
var moveChip2A = function(){
  $(this).html($(this).attr('image'));
  $chip2a.addClass('Achips-dealt').animate({top: +40, left: +270}, moveChip3A);
}
var moveChip3A = function(){
  $(this).html($(this).attr('image'));
  $chip3a.addClass('Achips-dealt').animate({top: +40, left: +160}, moveChip4A);
}
var moveChip4A = function(){
  $(this).html($(this).attr('image'));
  $chip4a.addClass('Achips-dealt').animate({top: +350, left: +395}, moveChip5A);
}
var moveChip5A = function(){
  $(this).html($(this).attr('image'));
  $chip5a.addClass('Achips-dealt').animate({top: +350, left: +290}, moveChip6A);
}
var moveChip6A = function(){
  $(this).html($(this).attr('image'));
  $chip6a.addClass('Achips-dealt').animate({top: +350, left: +185}, moveChip7A);
}
var moveChip7A = function(){
  $(this).html($(this).attr('image'));
  $chip7a.addClass('Achips-dealt').animate({top: +350, left: +80}, moveChip7A);
}
