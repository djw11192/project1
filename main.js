//
//add variables for each chip and the deal button
//When deal button is clicked, move the chips to their correct location
//Create a Player constructor with all players and their stats listed
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
var $ok2 = $('#okBtn2');
var $rules = $('#rules')
var $rulesList = $('#rulesList');
var $instructions = $('#instructions');
var newList = "";
var weights;
var customWeights = [];


//click ok to remove rules page and append scoring options page
$ok.on('click', function(){
  $rules.text('Scoring');
  $rulesList.remove();
  $ok.remove();

  newList = '<div id="scoringList">'
  newList += '<div>'
  newList +='<p>Pts:</p><p>X</p>'
  newList += '<p class="weight">1</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>Reb:</p><p>X</p>'
  newList += '<p class="weight">1.5</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>Ass:</p><p>X</p>'
  newList += '<p class="weight">1.7</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>Stl:</p><p>X</p>'
  newList += '<p class="weight">3</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>Blk:</p><p>X</p>'
  newList += '<p class="weight">4</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>Fg %:</p><p>X</p>'
  newList += '<p class="weight">10</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>Ft %:</p><p>X</p>'
  newList += '<p class="weight">10</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>3pm:</p><p>X</p>'
  newList += '<p class="weight">2</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '<div>'
  newList +='<p>Tov:</p><p>X</p>'
  newList += '<p class="weight">-1.5</p>'
  newList += '<button class="btnLeft">-</button><button class=btnRight>+</button>'
  newList += '</div>'
  newList += '</div>'
  newList += '<br>'
  newList += '<div class="ok"><button id="okBtn2">OK</button></div>'

  $instructions.append(newList)

  changeWeights();
  statWeights();

  $('#okBtn2').on('click', function(){
    $('#instructions').hide();
    $('#okBtn2').hide();
    dealChips();
  })
})



//click buttons change the weighting of stats
// $(this).hasClass('btnLeft') ? -.1 : .1
function changeWeights(){
  $('.btnLeft, .btnRight').on('click', function(){
    var makeWeight = Number($(this).parent().children().eq(2).text());
    var toAdd = ($(this).hasClass('btnLeft') ? -.1 : .1)
    makeWeight += toAdd;
    makeWeight = makeWeight.toFixed(1);
    $(this).parent().children().eq(2).text(makeWeight);
  })
}

function statWeights(){
for(i=0; i<9; i++ ){
  customWeights.push(Number($('.weight').eq(i).text()));
  }
}


//make a constructor to create players
function Player(ppg, reb, ass, stl, blk, fg, ft, threes, tov, image, name, sum){
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
  this.sum = 0;
}

var players = [
  new Player(30.1, 5.4, 6.7, 2.1, 0.2, .50, .90, 5.1, 3.3, '<img src="images/steph-curry.png"/>', "Curry"),
  new Player(28.2, 8.2, 5, 1, 1.2, .51, .89, 2.6, 3.5, '<img src="images/durant.png"/>', "Durant"),
  new Player(29, 6.1, 7.5, 1.7, 0.6, .44, .86, 2.9, 4.6, '<img src="images/harden.png"/>', "Harden"),
  new Player(23.5, 7.4, 10.4, 2, 0.3, .45, .81, 1.3, 4.3, '<img src="images/westbrook.png"/>', "Westbrook"),
  new Player(18.3, 10.5, 2, 0.7, 1.7, .54, .81, 0.4, 2.2, '<img src="images/towns.png"/>', "Towns"),
  new Player(21.2, 6.8, 2.6, 1.8, 1, .51, .87, 1.8, 1.5, '<img src="images/kawhi.png"/>', "Leonard"),
  new Player(24.3, 10.3, 1.9, 1.3, 2, .49, .76, 0.6, 2, '<img src="images/anthony davis.png"/>', "Davis"),
  new Player(25.3, 7.4, 6.8, 1.4, 0.6, .52, .73, 1.1, 3.3, '<img src="images/lebron.png"/>', "James"),
  new Player(26.9, 11.5, 3.3, 1.6, 1.4, .45, .72, 1.1, 3.8, '<img src="images/cousins.png"/>', "Cousins"),
  new Player(16.9, 7.7, 4.3, 1.2, 1.4, .51, .72, 0.4, 2.6, '<img src="images/giannis.png"/>', "Antetokounmpo"),
  new Player(14.2, 11.8, 0.4, 0.6, 3.7, .61, .65, 0, 1.9, '<img src="images/whiteside.png"/>', "Whiteside"),
  new Player(14, 9.5, 7.4, 1.5, 1.4, .49, .7, 1.2, 3.2, '<img src="images/green.png"/>', "Green"),
  new Player(19.9, 4.9, 10.2, 1.9, 0.8, .42, .79, 1.5, 4.1, '<img src="images/john_wall.png"/>', "Wall"),
  new Player(23.1, 7, 4.1, 1.9, 0.4, .42, .86, 2.6, 3.3, '<img src="images/paul_george.png"/>', "George"),
  new Player(19.5, 4.2, 10, 2.1, 0.2, .46, .9, 1.6, 2.6, '<img src="images/chris.png"/>', "Paul"),
  new Player(25.1, 4, 6.8, 0.9, 0.4, .42, .89, 3.1, 3.2, '<img src="images/lillard.png"/>', "Lillard"),
  new Player(21.2, 4.7, 6.4, 2.1, 0.4, .43, .81, 2.8, 2.9, '<img src="images/lowry.png"/>', "Lowry"),
  new Player(20.9, 4.4, 5.2, 1.6, 0.5, .43, .85, 2.2, 2.1, '<img src="images/walker.png"/>', "Walker"),
  new Player(17.1, 9, 3.3, 1.8, 1.7, .47, .76, 0.9, 2.4, '<img src="images/milsap.png"/>', "Milsap")
]

var playersInGame=[];
function setArray(){
  for(i=0; i<14; i++){
    playersInGame.push(players[i])
  }
}

//applies a total value to each player based on the scoring system the user enters
function setPlayerVal(){
  for(i=0; i<playersInGame.length; i++){
    playersInGame[i].sum =
    (playersInGame[i].ppg)*customWeights[0]+
    (playersInGame[i].ass)*customWeights[1]+
    (playersInGame[i].reb)*customWeights[2]+
    (playersInGame[i].stl)*customWeights[3]+
    (playersInGame[i].blk)*customWeights[4]+
    (playersInGame[i].fg)*customWeights[5]+
    (playersInGame[i].ft)*customWeights[6]+
    (playersInGame[i].threes)*customWeights[7]+
    (playersInGame[i].tov)*customWeights[8]
  }
}

var randomize = function(){
  players.sort(function(a, b){
  return 0.5 - Math.random();
  });
}


var $chips = $('.chip')
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
  $deal.show();
  $deal.on('click',function(){
    $('#away-score h3, #home-score h3').text('0');
    playersInGame = [];
    homeScore=0;
    awayScore=0;
    $deal.hide();
    randomize();
    setArray();
    setPlayerVal();

    console.log('deal');
    $('#plusHome img').remove();
    $('#plusAway img').remove();

    awayTurn();

    //assign the new objects as attributes for each chip
    $chips.each(function(i, el) {
      $(el).attr(playersInGame[i])
    })
    moveChip1H();
  })
}

var moveChip1H = function(){
  $chips.eq(0).addClass('hChips-dealt').animate({top: +40, right: +380}, moveChip2H)
}
var moveChip2H = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(1).addClass('hChips-dealt').animate({top: +40, right: +270}, moveChip3H);
}
var moveChip3H = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(2).addClass('hChips-dealt').animate({top: +40, right: +160}, moveChip4H);
}
var moveChip4H = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(3).addClass('hChips-dealt').animate({top: +350, right: +395}, moveChip5H);
}
var moveChip5H = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(4).addClass('hChips-dealt').animate({top: +350, right: +290}, moveChip6H);
}
var moveChip6H = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(5).addClass('hChips-dealt').animate({top: +350, right: +185}, moveChip7H);
}
var moveChip7H = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(6).addClass('hChips-dealt').animate({top: +350, right: +80}, moveChip1A);
}
var moveChip1A = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(7).addClass('aChips-dealt').animate({top: +40, left: +380}, moveChip2A);
}
var moveChip2A = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(8).addClass('aChips-dealt').animate({top: +40, left: +270}, moveChip3A);
}
var moveChip3A = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(9).addClass('aChips-dealt').animate({top: +40, left: +160}, moveChip4A);
}
var moveChip4A = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(10).addClass('aChips-dealt').animate({top: +350, left: +395}, moveChip5A);
}
var moveChip5A = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(11).addClass('aChips-dealt').animate({top: +350, left: +290}, moveChip6A);
}
var moveChip6A = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(12).addClass('aChips-dealt').animate({top: +350, left: +185}, moveChip7A);
}
var moveChip7A = function(){
  $(this).html($(this).attr('image'));
  $chips.eq(13).addClass('aChips-dealt').animate({top: +350, left: +80}, lastChip);
}
var lastChip = function(){
  $(this).html($(this).attr('image'));
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
    newSidebar +='<li>Fg %:  '+$(this).attr('fg')+'</li>'
    newSidebar +='<li>Ft %:  '+$(this).attr('ft')+'</li>'
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
  $('#home-pick div, #away-pick div').remove();
  $homeSidebar.text('');
  $awaySidebar.text('');
  $('#plusHome, #plusAway').css("font-size", "0px");
//reset game when it's over
  resetGame();
}

function resetGame(){
  if(homeScore+awayScore===7){
    turn=1;
    dealChips()
    appendChips();
    $('.home img').remove();
    $('.away img').remove();

    if(homeScore>awayScore){
      console.log("home champ")
      showTrophyHome();
    } else {
      console.log('away champ');
      showTrophyAway();
    }
  }
}


function appendChips(){
  for(var i = 0; i < ($chips.length/2); i++) {
    $('.home-chips').append($($chips[i]))
  }
  for(var i = 7; i < 14; i += 1) {
    $('.away-chips').append($($chips[i]))
  }
}

function showTrophyHome(){
  $('#plusHome').append('<img src="images/NBA-TROPHY.png" class="trophyHome"/>');
  setInterval(function(){$('.trophyHome').toggleClass('toggleHome')},400);
}
function showTrophyAway(){
  $('#plusAway').append('<img src="images/NBA-TROPHY.png" class="trophyAway"/>');
   setInterval(function(){$('.trophyAway').toggleClass('toggleAway')},400)
}
