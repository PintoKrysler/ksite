$('nav .nav_icon ').on('click',function(){
  $('.nav_icon').removeClass('active');
  $(this).addClass('active')
});

var skills=[];

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
  'level':'intermediate',
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
  'bgcolor':[54,111,158],
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
  'level':'intermediate',
});

skills.push({
  'name':'CSS3',
  'bgcolor':[21,114,182],
  'fontcolor':'',
  'level':'intermediate',
});

skills.push({
  'name':'SCSS',
  'bgcolor':[205,102,154],
  'fontcolor':'',
  'level':'basic',
});

$('#skills_btn').on('click',function(){
  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];
    var bg = skill.bgcolor;
    var style='background-color:rgba('+bg[0]+','+bg[1]+','+bg[2]+',0.6)';
    $('#skills_container').append('<div class="circle '+skill.level+'" style="'+style+'"">'+skill.name+'</div>');
  }

});
