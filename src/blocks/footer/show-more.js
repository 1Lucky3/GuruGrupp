document.querySelector('.show-more').addEventListener('click', function(){
  $(this).css({
    'visibility': 'hidden'
  });
  let cardData;
  let xhr =  new XMLHttpRequest();
  xhr.open('GET','https://6075786f0baf7c0017fa64ce.mockapi.io/products')
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function() {
    cardData = xhr.response;
    for(let i = 16; i < cardData.length; i++){
      let dataType = cardData[i];
      let GetDate = new Date(dataType.date);
      let checkedMessage;
      let deliveryIconChecked;
      let starIconChecked;
      if(dataType.seen){
        checkedMessage = '<div class="card-wrapper__checked">Просмотрено</div>'
        deliveryIconChecked = '<div class="card-wrapper__delivery-icon-checked"></div>'
        starIconChecked = '<div class="card-wrapper__star-icon-checked"></div>'
        infoWrapperStyle = 'style="background: #FFF6A5"'
      }
      else{
        checkedMessage = ""
        deliveryIconChecked = '<div class="card-wrapper__delivery-icon"></div>'
        starIconChecked = '<div class="card-wrapper__star-icon"></div>'
        infoWrapperStyle = ""
      }
      $(document.querySelector('.main__container')).append(`
      <div class="card-wrapper">
        <div class="card-wrapper__picture">
          ${checkedMessage}
          <div class="card-wrapper__compare">
            <label class="card-wrapper__compare-input">
              <input type="checkbox" class="card-wrapper__compare-checkbox">
              <span class="card-wrapper__compare-icon"></span>
            </label>
          </div>
          <div class="card-wrapper__like">
            <label class="card-wrapper__like-input">
              <input type="checkbox" class="card-wrapper__like-checkbox">
              <span class="card-wrapper__like-icon"></span>
            </label>
          </div>
          <div class="card-wrapper__slider-buttons">
            <span class="card-wrapper__button1"></span>
            <span class="card-wrapper__button2"></span>
            <span class="card-wrapper__button3"></span>
            <span class="card-wrapper__button4"></span>
          </div>
        </div>
        <div class="card-wrapper__info" ${infoWrapperStyle}>
          ${starIconChecked}
          ${deliveryIconChecked}
          <div class="card-wrapper__old-price-wrapper">
            <div class="card-wrapper__old-price">${dataType.oldPrice}</div>
            <span class="card-wrapper__roubl-symbol"></span>
            <div class="card-wrapper__poloska"></div>
          </div>
          <div class="card-wrapper__price-wrapper">
            <div class="card-wrapper__current-price">${dataType.price}</div>
            <span class="card-wrapper__roubl-symbol1"></span>
          </div>
          <div class="card-wrapper__card-name">${dataType.title}</div>
          <div class="card-wrapper__city-date">
            <span class="card-wrapper__city">${dataType.locality}</span>
            <span class="card-wrapper__date">${GetDate.toLocaleDateString()}, ${GetDate.getHours()}.${GetDate.getMinutes()}</span>
          </div>
        </div>
      </div>`);
    }
  }
});