$('nav .nav_icon ').on('click',function(){
  $('.nav_icon').removeClass('active');
  $(this).addClass('active')
});

var skills=[];
var positions = ['bottom','top','-webkit-baseline-middle'];
skills.push({
  'name':'Javascript',
  'bgcolor':[249,225,33],
  'fontcolor':'',
  'level':'advanced',
});

skills.push({
  'name':'GO',
  'bgcolor':[106,215,229],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'PHP',
  'bgcolor':[119,123,179],
  'fontcolor':'',
  'level':'advanced',
});

skills.push({
  'name':'JAVA',
  'bgcolor':[238,46,49],
  'fontcolor':'',
  'level':'basic',
});

skills.push({
  'name':'C',
  'bgcolor':[168,185,204],
  'fontcolor':'',
  'level':'advanced',
});

skills.push({
  'name':'Python',
  'bgcolor':[54,111,158],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'Oracle',
  'bgcolor':[237,28,36],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'MySQL',
  'bgcolor':[232,121,18],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'PostgreSQL',
  'bgcolor':[51,103,145],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'MongoDB',
  'bgcolor':[79,178,63],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'HTML5',
  'bgcolor':[228,77,38],
  'fontcolor':'',
  'level':'advanced',
});

skills.push({
  'name':'CSS3',
  'bgcolor':[21,114,182],
  'fontcolor':'',
  'level':'advanced',
});

skills.push({
  'name':'SCSS',
  'bgcolor':[205,102,154],
  'fontcolor':'',
  'level':'basic',
});

skills.push({
  'name':'GIT',
  'bgcolor':[240,80,51],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'CodeIgniter',
  'bgcolor':[221,72,20],
  'fontcolor':'',
  'level':'basic',
});

skills.push({
  'name':'Phonegap',
  'bgcolor':[39,161,197],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'Assembly',
  'bgcolor':[168,185,204],
  'fontcolor':'',
  'level':'advanced',
});

skills.push({
  'name':'NodeJS',
  'bgcolor':[127,189,66],
  'fontcolor':'',
  'level':'basic',
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('#skills_btn').on('click',function(){});
for (var i = 0; i < skills.length; i++) {
  var skill = skills[i];
  var bg = skill.bgcolor;
  var max = positions.length-1;
  var random_n = getRandomInt(0,max);
  var random_pos = positions[random_n];

  var style='background-color:rgba('+bg[0]+','+bg[1]+','+bg[2]+',0.6);vertical-align:'+random_pos;
  $('#skills_container').append('<div class="circle '+skill.level+'" style="'+style+'"">'+skill.name+'</div>');
}
