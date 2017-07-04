const Board = (update) => {

  const boardContainer = $("<section class='board'></section>");
  const pinImage = $("<div class='board__image'><img src='"+ state.user.image.original.url +"'></div>");
  const pinTitle = $("<div class='board__title'><h2>" + state.user.metadata.article.name +"</h2></div>");
  const pinSubTitle = $("<div class='board__subtitle'><p>"+ state.user.metadata.article.description +"</p></div>");
  const pinAuthor = $("<div class='board__author'><img src='assets/images/arabelyuska.jpg' alt='Arabela Rojas'><h3>"+ state.user.creator.first_name + "</h3><p>"+" "+ state.user.board.name +"</p></div>");

  boardContainer.append(pinImage);
  boardContainer.append(pinTitle);
  boardContainer.append(pinSubTitle);
  boardContainer.append(pinAuthor);

  return boardContainer;
}