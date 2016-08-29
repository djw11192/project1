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
  moveChip1H();
})

var moveChip1H = function(){
  $chip1h.addClass('Hchips-dealt').animate({top: +40, right: +380}, moveChip2H)
}
var moveChip2H = function(){
  $chip2h.addClass('Hchips-dealt').animate({top: +40, right: +270}, moveChip3H);
}
var moveChip3H = function(){
  $chip3h.addClass('Hchips-dealt').animate({top: +40, right: +160}, moveChip4H);
}
var moveChip4H = function(){
  $chip4h.addClass('Hchips-dealt').animate({top: +350, right: +395}, moveChip5H);
}
var moveChip5H = function(){
  $chip5h.addClass('Hchips-dealt').animate({top: +350, right: +290}, moveChip6H);
}
var moveChip6H = function(){
  $chip6h.addClass('Hchips-dealt').animate({top: +350, right: +185}, moveChip7H);
}
var moveChip7H = function(){
  $chip7h.addClass('Hchips-dealt').animate({top: +350, right: +80}, moveChip1A);
}
var moveChip1A = function(){
  $chip1a.addClass('Achips-dealt').animate({top: +40, left: +380}, moveChip2A);
}
var moveChip2A = function(){
  $chip2a.addClass('Achips-dealt').animate({top: +40, left: +270}, moveChip3A);
}
var moveChip3A = function(){
  $chip3a.addClass('Achips-dealt').animate({top: +40, left: +160}, moveChip4A);
}
var moveChip4A = function(){
  $chip4a.addClass('Achips-dealt').animate({top: +350, left: +395}, moveChip5A);
}
var moveChip5A = function(){
  $chip5a.addClass('Achips-dealt').animate({top: +350, left: +290}, moveChip6A);
}
var moveChip6A = function(){
  $chip6a.addClass('Achips-dealt').animate({top: +350, left: +185}, moveChip7A);
}
var moveChip7A = function(){
  $chip7a.addClass('Achips-dealt').animate({top: +350, left: +80}, moveChip7A);
}
