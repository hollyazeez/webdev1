let jqueryBox = $('.box');

for(let i = 0; i < 200; i++) {
  let newBox = `<div class="box" style="width: ${i}px; height: ${i}px;"></div>`
  $('body').append(newBox);
}

$('.box').click(function(){
  
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let newColor = `rgb(${r}, ${g}, ${b})`
 
  $(this).css("background", `${newColor}`);
  $(this).text("I was clicked!");
  $(this).toggleClass("spin-animation");
  
})


