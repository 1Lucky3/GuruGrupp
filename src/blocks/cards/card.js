
let cardData;
let xhr =  new XMLHttpRequest();
xhr.open('GET','https://6075786f0baf7c0017fa64ce.mockapi.io/products')
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
  cardData = xhr.response;
  for(let i = 0; i < cardData.length; i++){
    let dataType = cardData[i];
    document.getElementById(`old-price${i}`).innerHTML=Math.trunc(dataType.oldPrice);
    document.getElementById(`current-price${i}`).innerHTML=Math.trunc(dataType.price);
    document.getElementById(`card-name${i}`).innerHTML=dataType.title;
    document.getElementById(`city${i}`).innerHTML=dataType.locality;
    let GetDate = new Date(dataType.date);
    document.getElementById(`date${i}`).innerHTML=
    `${GetDate.toLocaleDateString()}` + ', ' + `${GetDate.getHours()}`+ '.' + `${GetDate.getMinutes()}`;
    if(dataType.seen){
      checkedMessage = document.getElementById(`old-price${i}`).parentElement.parentElement.parentElement.children[0];
      deliveryIconParent = document.getElementById(`delivery-icon${i}`).parentElement;
      deliveryIcon = document.getElementById(`delivery-icon${i}`).remove();
      $(deliveryIconParent).append('<div class="card-wrapper__delivery-icon-checked"></div>')
      starIconParent = document.getElementById(`star-icon${i}`).parentElement;
      starIcon = document.getElementById(`star-icon${i}`).remove();
      $(starIconParent).append('<div class="card-wrapper__star-icon-checked"></div>')
      $(checkedMessage).append('<div class="card-wrapper__checked">Просмотрено</div>')
      $(`#old-price${i}`).parent().parent().css({
        'background': '#FFF6A5'
      });
    }
  }
}
function sliderButton(imageUrl){
  $('.card-wrapper__slider-buttons').children().css({
    'background' : '#C4C4C4'
  })
  $('.card-wrapper__picture').css({
    'background' : imageUrl,
    'background-size' : 'cover'
  })
}
$('.card-wrapper__slider-buttons .card-wrapper__button1').on('click', function(){
  sliderButton('url(images/pict11a0e0b2a853be98b8c48c62b7eb01d19.jpg)');
  $(this).css({
    'background' : '#00A0AB'
  })
})
$('.card-wrapper__slider-buttons .card-wrapper__button2').on('click', function(){
  sliderButton('url(images/pict22c4c91d8a3724643ad00e464c63424fa.jpg)');
  $(this).css({
    'background' : '#00A0AB'
  })
})
$('.card-wrapper__slider-buttons .card-wrapper__button3').on('click', function(){
  sliderButton('url(images/pic3e84784a4027786287d235d3bef686530.jpg)');
  $(this).css({
    'background' : '#00A0AB'
  })
})
$('.card-wrapper__slider-buttons .card-wrapper__button4').on('click', function(){
  sliderButton('url(images/pict46d2386ee0a91e079d133f98898c047aa.jpg)');
  $(this).css({
    'background' : '#00A0AB'
  })
})





