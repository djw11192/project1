//
//add variables for each chip and the deal button
//When deal button is clicked, move the chips to their correct location
//Create a MakePlayer constructor with all players and their stats listed
//after each chip is dealt, add a player picture and add that player's value to the chip
//pop up an alert that tells the players This is a best of seven series and it's your turn when the possession arrow points to your side.  Player to go girst will alernate in a 2-2-1-1-1 fashion (this is for V2)
//if team has possession, make their chips clickable
//when clicked the player's stats will show in the sidebar
//sidebar will have a "play" button at the bottom, and if clicked it'll move to the other players turn
//when both players "play" a chip, evaluate the stat categories with weighted values and find the chip with the higher sum
//Add a point to the game score
//when sum of scores is 7(or all chips played) reset the board to play again. possession start the other side now


//when okay button is clicked, go to next page which shows the default scoring system and allows user to change it
var $ok = $('#okBtn');
var $rules = $('#rules')
var $rulesList = $('#rulesList');
var $instructions = $('#instructions');
var newList = "";

$ok.on('click', function(){
  $rules.text('Scoring');
  $rulesList.remove();
  $ok.remove();

  newList = '<div id="scoringList">'
  newList +='<p>Pts:</p><p>X</p>'
  newList += '<p class="weight">1</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>Reb:</p><p>X</p>'
  newList += '<p class="weight">1.5</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>Ass:</p><p>X</p>'
  newList += '<p class="weight">1.7</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>Stl:</p><p>X</p>'
  newList += '<p class="weight">3</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>Blk:</p><p>X</p>'
  newList += '<p class="weight">4</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>Fg:</p><p>X</p>'
  newList += '<p class="weight">(% x 10)</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>Ft:</p><p>X</p>'
  newList += '<p class="weight">(% x 10)</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>3pm:</p><p>X</p>'
  newList += '<p class="weight">2</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList +='<p>Tov:</p><p>X</p>'
  newList += '<p class="weight">- 1.5</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'

  $instructions.append(newList)
})

//click buttons change the weighting of stats
function changeWeights(){
  btnLeft.on('click', function(){
    
  })
}



//make a constructor to create players
function MakePlayer(ppg, reb, ass, stl, blk, fg, ft, threes, tov, image, name, sum){
  this.ppg = ppg;
  this.reb = reb;
  this.ass = ass;
  this.stl = stl;
  this.blk = blk;
  this.fg = fg;
  this.ft = ft;
  this.threes = threes;
  this.tov = tov;
  this.image= image;
  this.name=name;
  this.sum =
   (this.ppg+(this.reb*1.5)+(this.ass*1.7)+(this.stl*3)+(this.blk*4.5)+(this.fg/10)+(this.ft/10)+(this.threes*2)+(this.tov*-1.5));
}

var curry = new MakePlayer(30.1, 5.4, 6.7, 2.1, 0.2, 50.4, 90.8, 5.1, 3.3, '<img src="images/steph-curry.png"/>', "Curry");
var durant = new MakePlayer(28.2, 8.2, 5, 1, 1.2, 50.5, 89.8, 2.6, 3.5, '<img src="images/durant.png"/>', "Durant");
var harden = new MakePlayer(29, 6.1, 7.5, 1.7, 0.6, 43.9, 86, 2.9, 4.6, '<img src="images/harden.png"/>', "Harden");
var westbrook = new MakePlayer(23.5, 7.4, 10.4, 2, 0.3, 45.4, 81.2, 1.3, 4.3, '<img src="images/westbrook.png"/>', "Westbrook");
var towns = new MakePlayer(18.3, 10.5, 2, 0.7, 1.7, 54.2, 81.1, 0.4, 2.2, '<img src="images/towns.png"/>', "Towns");
var leonard = new MakePlayer(21.2, 6.8, 2.6, 1.8, 1, 50.6, 87.4, 1.8, 1.5, '<img src="images/kawhi.png"/>', "Leonard");
var davis = new MakePlayer(24.3, 10.3, 1.9, 1.3, 2, 49.3, 75.8, 0.6, 2, '<img src="images/anthony davis.png"/>', "Davis");
var lebron = new MakePlayer(25.3, 7.4, 6.8, 1.4, 0.6, 52, 73.1, 1.1, 3.3, '<img src="images/lebron.png"/>', "James");
var cousins = new MakePlayer(26.9, 11.5, 3.3, 1.6, 1.4, 45.1, 71.8, 1.1, 3.8, '<img src="images/cousins.png"/>', "Cousins");
var giannis = new MakePlayer(16.9, 7.7, 4.3, 1.2, 1.4, 50.6, 72.4, 0.4, 2.6, '<img src="images/giannis.png"/>', "Antetokounmpo");
var whiteside = new MakePlayer(14.2, 11.8, 0.4, 0.6, 3.7, 60.6, 65, 0, 1.9, '<img src="images/whiteside.png"/>', "Whiteside");
var green = new MakePlayer(14, 9.5, 7.4, 1.5, 1.4, 49, 69.6, 1.2, 3.2, '<img src="images/green.png"/>', "Green");
var wall = new MakePlayer(19.9, 4.9, 10.2, 1.9, 0.8, 42.4, 79.1, 1.5, 4.1, '<img src="images/john_wall.png"/>', "Wall");
var george = new MakePlayer(23.1, 7, 4.1, 1.9, 0.4, 41.8, 86, 2.6, 3.3, '<img src="images/paul_george.png"/>', "George");


var players = [curry, george, durant, wall, harden, green, westbrook, towns, whiteside, leonard, lebron,davis, cousins, giannis];

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
var $deal = $('#dealBtn');
var $poss = $('#poss');
var $homeChips = $('.home-chips');
var $home = $('.home');
var $away = $('.away');
var turn =1;
var $homeSidebar = $('#home-sidebar');
var $awaySidebar = $('#away-sidebar');
var currentHomeChip;
var currentAwayChip;
var newSidebar= "";
var homeScore =0;
var awayScore= 0;
var delay;

function dealChips(){
  $deal.on('click',function(){
    $deal.off();
    randomize();
    console.log('deal');
    $('#plusHome img').remove();
    $('#plusAway img').remove();

    awayTurn();

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
}

var moveChip1H = function(){
  $chip1h.addClass('hChips-dealt').animate({top: +40, right: +380}, moveChip2H)
}
var moveChip2H = function(){
  $(this).html($(this).attr('image'));
  $chip2h.addClass('hChips-dealt').animate({top: +40, right: +270}, moveChip3H);
}
var moveChip3H = function(){
  $(this).html($(this).attr('image'));
  $chip3h.addClass('hChips-dealt').animate({top: +40, right: +160}, moveChip4H);
}
var moveChip4H = function(){
  $(this).html($(this).attr('image'));
  $chip4h.addClass('hChips-dealt').animate({top: +350, right: +395}, moveChip5H);
}
var moveChip5H = function(){
  $(this).html($(this).attr('image'));
  $chip5h.addClass('hChips-dealt').animate({top: +350, right: +290}, moveChip6H);
}
var moveChip6H = function(){
  $(this).html($(this).attr('image'));
  $chip6h.addClass('hChips-dealt').animate({top: +350, right: +185}, moveChip7H);
}
var moveChip7H = function(){
  $(this).html($(this).attr('image'));
  $chip7h.addClass('hChips-dealt').animate({top: +350, right: +80}, moveChip1A);
}
var moveChip1A = function(){
  $(this).html($(this).attr('image'));
  $chip1a.addClass('aChips-dealt').animate({top: +40, left: +380}, moveChip2A);
}
var moveChip2A = function(){
  $(this).html($(this).attr('image'));
  $chip2a.addClass('aChips-dealt').animate({top: +40, left: +270}, moveChip3A);
}
var moveChip3A = function(){
  $(this).html($(this).attr('image'));
  $chip3a.addClass('aChips-dealt').animate({top: +40, left: +160}, moveChip4A);
}
var moveChip4A = function(){
  $(this).html($(this).attr('image'));
  $chip4a.addClass('aChips-dealt').animate({top: +350, left: +395}, moveChip5A);
}
var moveChip5A = function(){
  $(this).html($(this).attr('image'));
  $chip5a.addClass('aChips-dealt').animate({top: +350, left: +290}, moveChip6A);
}
var moveChip6A = function(){
  $(this).html($(this).attr('image'));
  $chip6a.addClass('aChips-dealt').animate({top: +350, left: +185}, moveChip7A);
}
var moveChip7A = function(){
  $(this).html($(this).attr('image'));
  $chip7a.addClass('aChips-dealt').animate({top: +350, left: +80}, lastChip);
}
var lastChip = function(){
  $(this).html($(this).attr('image'));
  // awayTurn();
}

//turns go as followed:
//1.home 2.away 3.home 4.away 5.away 6.home 7.away 8.home 9.home 10.away 11.away 12.home 13.home 14.away


//start with possession arrow to home
function homeTurn(){
  $poss.html('<span>❮</span>POSS');
  $away.off('click');

  //make all home chips clickable and append player profile to sidebar
  $home.on('click',function(){
    currentHomeChip = $(this); //saves the chip they clicked on in a variable for later use

    //content to append to sidebar
    newSidebar = $(this).attr('image')
    newSidebar += '<p class="name">'+$(this).attr('name')+'</p>'
    newSidebar += '<ul>'
    newSidebar +='<li>Pts:  '+$(this).attr('ppg')+'</li>'
    newSidebar +='<li>Reb:  '+$(this).attr('reb')+'</li>'
    newSidebar +='<li>Ass:  '+$(this).attr('ass')+'</li>'
    newSidebar +='<li>Stl:  '+$(this).attr('stl')+'</li>'
    newSidebar +='<li>Blk:  '+$(this).attr('blk')+'</li>'
    newSidebar +='<li>Fg:  '+$(this).attr('fg')+'%'+'</li>'
    newSidebar +='<li>Ft:  '+$(this).attr('ft')+'%'+'</li>'
    newSidebar +='<li>3pm:  '+$(this).attr('threes')+'</li>'
    newSidebar +='<li>Tov:  '+$(this).attr('tov')+'</li>'
    newSidebar += '</ul>'
    newSidebar += '<div class="btnStyle"><button class="playBtn1">PLAY</button></div>'

    $homeSidebar.text('');
    $homeSidebar.append(newSidebar);
    $('#home-sidebar img').addClass('profilePic')

    //when 'play' is clicked, the chip is no longer displayed in current location and is appended to an empty div near the center of the court. It also runs the functions to check for switching turns and finding a winner
    $('.playBtn1').on('click', function(){
        $('.playBtn1').hide();
        $('#home-pick').append(currentHomeChip);
        currentHomeChip.removeAttr('style');
        $home.off('click');
        $('.playBtn1').off();
        turn+=1;
        checkMatchup();
        awayTurn();
    })
  })
}

//awayTurn functionality is same as homeTurn, but its initial if statement distinguishes who can make a move
function awayTurn(){
  if(turn ===2||turn===4||turn===5||turn===7||turn===10||turn===11||turn===14){
    $poss.html('POSS<span>❯</span>');
    $home.off('click');
    $away.on('click', function(){
      currentAwayChip = $(this);
      newSidebar = $(this).attr('image')
      newSidebar += '<p class="name">'+$(this).attr('name')+'</p>'
      newSidebar += '<ul>'
      newSidebar +='<li>Pts:  '+$(this).attr('ppg')+'</li>'
      newSidebar +='<li>Reb:  '+$(this).attr('reb')+'</li>'
      newSidebar +='<li>Ass:  '+$(this).attr('ass')+'</li>'
      newSidebar +='<li>Stl:  '+$(this).attr('stl')+'</li>'
      newSidebar +='<li>Blk:  '+$(this).attr('blk')+'</li>'
      newSidebar +='<li>Fg%:  '+$(this).attr('fg')+'%'+'</li>'
      newSidebar +='<li>Ft%:  '+$(this).attr('ft')+'%'+'</li>'
      newSidebar +='<li>3pm:  '+$(this).attr('threes')+'</li>'
      newSidebar +='<li>Tov:  '+$(this).attr('tov')+'</li>'
      newSidebar += '</ul>'
      newSidebar += '<div class="btnStyle"><button class="playBtn2">PLAY</button></div>'
      $awaySidebar.text('');
      $awaySidebar.append(newSidebar);
      $('#away-sidebar img').addClass('profilePic')
      $('.playBtn2').on('click', function(){
        $('.playBtn2').hide();
        $('#away-pick').append(currentAwayChip);
        currentAwayChip.removeAttr('style');
        $away.off('click');
        $('.playBtn2').off();
        checkMatchup();
        turn +=1;
        awayTurn();
      })
    })
  } else {
    homeTurn();
  }
}

function checkMatchup(){
  if($('#home-pick div').attr('sum') !==undefined
  && $('#away-pick div').attr('sum')!== undefined){
    findWinner();
    delay = setTimeout(clearContent,2000);
    awayTurn();
  }
}

//when a team wins, "+1" will pop up and the game score will increase by 1
function findWinner(){
  if(($('#home-pick div').attr('sum'))>
  ($('#away-pick div').attr('sum'))){
    console.log("home wins");
    homeScore +=1;
    $('#plusHome').animate({fontSize:150},1500, homePlusOne);
  } else {
    console.log("away wins");
    awayScore+=1;
    $('#plusAway').animate({fontSize:150},1500, awayPlusOne);
  }
}

function homePlusOne(){
  $('#home-score h3').text(homeScore);
}

function awayPlusOne(){
  $('#away-score h3').text(awayScore);
}

var clearContent = function(){
  $('#home-pick div').remove();
  $('#away-pick div').remove();
  $homeSidebar.text('');
  $awaySidebar.text('');
  $('#plusHome').css("font-size", "0px");
  $('#plusAway').css("font-size", "0px");

//reset game when it's over
  resetGame();
}

function resetGame(){
  if(homeScore+awayScore===7){
    turn=1;
    $('#away-score h3').text('0');
    $('#home-score h3').text('0');
    dealChips();
    appendChips();
    $('.home img').remove();
    $('.away img').remove();
    if(homeScore>awayScore){
      console.log("home champ")
      showTrophyHome();
      homeScore=0;
    } else {
      console.log('away champ');
      showTrophyAway();
      awayScore=0;
    }
  }
}

function appendChips(){
  $('.home-chips').append($chip1h);
  $('.home-chips').append($chip2h);
  $('.home-chips').append($chip3h);
  $('.home-chips').append($chip4h);
  $('.home-chips').append($chip5h);
  $('.home-chips').append($chip6h);
  $('.home-chips').append($chip7h);

  $('.away-chips').append($chip1a);
  $('.away-chips').append($chip2a);
  $('.away-chips').append($chip3a);
  $('.away-chips').append($chip4a);
  $('.away-chips').append($chip5a);
  $('.away-chips').append($chip6a);
  $('.away-chips').append($chip7a);
}

function showTrophyHome(){
  $('#plusHome').append('<img src="images/NBA-TROPHY.png" class="trophyHome"/>');
  setInterval(function(){
    $('.trophyHome').toggleClass('toggleHome')},400)
}
function showTrophyAway(){
  $('#plusAway').append('<img src="images/NBA-TROPHY.png" class="trophyAway"/>');
  setInterval(function(){
    $('.trophyAway').toggleClass('toggleAway')},400)
}

dealChips();
