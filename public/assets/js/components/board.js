const Board = (update) => {

  const boardContainer = $("<section class='board'></section>");
  const pinImage = state.pin.image.original.url.forEach( (e) => {}) $("<div class='board__image'><img src='"+ state.pin.image.original.url +"'></div>");
  const pinTitle = $("<div class='board__title'><h2>" + state.pin.metadata.article.name +"</h2></div>");
  const pinSubTitle = $("<div class='board__subtitle'><p>"+ state.pin.metadata.article.description +"</p></div>");
  const pinAuthor = $("<div class='board__author'><img src='assets/images/arabelyuska.jpg' alt='Arabela Rojas'><h3>"+ state.pin.creator.first_name + "</h3><p>"+" "+ state.pin.board.name +"</p></div>");

  boardContainer.append(pinImage);
  boardContainer.append(pinTitle);
  boardContainer.append(pinSubTitle);
  boardContainer.append(pinAuthor);

  pinImage.on('click', () => {
    state.modal =  Modal;
  })

  return boardContainer;
}
