$('nav .nav_icon ').on('click',function(){
  $('.nav_icon').removeClass('active');
  $(this).addClass('active')
//  stuffAppear()
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

var h1 = $('h1').text().split("")
var h1Value = $('h1').text()
h1.push(h1Value)


function stuffAppear() {
    var i;
    for (i = 0; i < h1.length; i++) {
        apperance(i);
    }
}

$('#sidebar').find('li:first a').addClass('active');

function apperance(i) {
    var x = h1[i];
    setTimeout(function() {
      $('h1').text(h1[i]).css({color:"#aaa"})
    }, 1000 + i * 1500);
}





function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Draw skills circles
for (var i = 0; i < skills.length; i++) {
  var skill = skills[i];
  var bg = skill.bgcolor;
  var max = positions.length-1;
  var random_n = getRandomInt(0,max);
  var random_pos = positions[random_n];

  var style='background-color:rgba('+bg[0]+','+bg[1]+','+bg[2]+',0.6);vertical-align:'+random_pos;
  $('#skills_container').append('<div class="circle '+skill.level+'" style="'+style+'"">'+skill.name+'</div>');
}

// Draw legend circles
var style='background-color:rgba(168,185,204,0.6);';
$('#legend_icons').append('<div class="circle basic" style="'+style+'"" data-label="BASIC"></div>');
$('#legend_icons').append('<div class="circle advanced" style="'+style+'"" data-label="ADVANCED"></div>');

$('#legend_icons .circle.basic , #legend_icons .circle.advanced').mouseenter(function(){
  var label = $(this).data('label');
  $('.legend_container .legend_label').html(label);
  $('.legend_container .legend_label').fadeIn('slow');
}).mouseleave(function(){

  $('.legend_container .legend_label').fadeOut('slow');

})

var num_pictures = 2;
var rotate_image_index = 1;
$('#personal_image .default_pic').mouseenter(function(){
  $('#personal_image .default_pic').css('display','none');
  var show_pic_index  = rotate_image_index % num_pictures;
  $('#personal_image .extra_pic_'+show_pic_index).css('display','inline-block');
  rotate_image_index++;
})
$('#personal_image .extra_pic').mouseleave(function(){
  $('#personal_image .extra_pic').hide();
  $('#personal_image .default_pic').css('display','inline-block');
})
