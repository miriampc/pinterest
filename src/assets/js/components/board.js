const Board = () => {
  const mainContainer = $('<section class="main-container"></section>');
  const dataUser = $(`<div class="main-container__user col-xs-6">
                        <h1>${state.pin[0].board.name}</h1>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                          <p>30 pines</p>
                          <p>83 seguidores</p>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6"><img src="assets/images/arabelyuska.jpg" alt="Arabela Rojas"></div>
                    </div>`);
  mainContainer.append(dataUser);
  const boardContainer = $('<div class="board"></div>');
  const addPin = $(`<div class="pin__newPin">
                        <div><a href="" class="fa fa-plus"></a></div>
                        <h2>Guardar Pin</h2>
                    </div>`);

  boardContainer.append(addPin);
  state.pin.forEach((element) => {
    const pinContainer = $('<div class="pin"></div>');
    const iconUpload = $('<a class="pin__upload" href="#"><i class="fa fa-upload"></i></a>');
    const iconPin = $('<a class="pin__pinear" href="#"><i class="fa fa-thumb-tack"></i> Guardar</a>');
    pinContainer.append(iconUpload);
    pinContainer.append(iconPin);
    const pinImage = $(`<div class="pin__image">
                          <img src="${element.image.original.url}" alt="Arabela Rojas">
                        </div>`);
      const pinAuthor = $(`<div class="pin__author">
                              <div class="col-xs-2 col-sm-2 col-md-2"><img src="assets/images/arabelyuska.jpg" alt="Arabela Rojas"></div>
                              <div class="col-xs-8 col-sm-8 col-md-8">
                                <h3>${element.creator.first_name}</h3>
                                <span>${element.board.name}</span>
                              </div>
                           </div>`);
      pinContainer.append(pinImage);
      if(element.metadata.article != undefined){
        const pinTitle = $(`<div class="pin__title"><h2>${element.metadata.article.name}</h2></div>`);
        const pinSubTitle = $(`<div class="pin__subtitle">${element.metadata.article.description}</div>`);
        pinContainer.append(pinTitle);
        pinContainer.append(pinSubTitle);
      }
      pinContainer.append(pinAuthor);
      boardContainer.append(pinContainer);

      pinContainer.on('click', (e) => {
        state.pinSelected = element;
        $('.modal').empty();
        $('.modal').append(Modal());
        $('.modal').css('overflow','scroll');
        $('body').css('overflow','hidden');
        $('.modal').show();
      })
      pinContainer.mouseover(() => {
        iconUpload.show();
        iconPin.show();
      })
      pinContainer.mouseout(() => {
        iconUpload.hide();
        iconPin.hide();
      })
  })
  mainContainer.append(boardContainer);
  return mainContainer;
}
