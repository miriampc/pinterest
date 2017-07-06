const Board = () => {
  const boardContainer = $('<section class="board"></section>');
  const addPin = $(`<div class="pin__newPin">
                        <div><a href="" class="fa fa-plus"></a></div>
                        <h2>Guardar Pin</h2>
                    </div>`);

  boardContainer.append(addPin);                  
  state.pin.forEach((element) => {
    const pinContainer = $('<div class="pin"></div>');
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
  })

  return boardContainer;
}
