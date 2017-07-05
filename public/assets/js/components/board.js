const Board = (update) => {

  const boardContainer = $("<section class='board'></section>");

  state.pin.forEach((e) =>{
  	alert();
  	console.log(e);
    const pinImage = $("<div class='board__image'><img src='"+ e.image.original.url +"'></div>");
    const pinTitle = $("<div class='board__title'><h2>" + e.metadata.article.name +"</h2></div>");
    const pinSubTitle = $("<div class='board__subtitle'><p>"+ e.metadata.article.description +"</p></div>");
    const pinAuthor = $("<div class='board__author'><img src='assets/images/arabelyuska.jpg' alt='Arabela Rojas'><h3>"+ e.creator.first_name + "</h3><p>"+" "+ e.board.name +"</p></div>");

    boardContainer.append(pinImage);
    boardContainer.append(pinTitle);
    boardContainer.append(pinSubTitle);
    boardContainer.append(pinAuthor);
    
  })



  pinImage.on('click', () => {
    state.modal =  Modal;
  })

  return boardContainer;
}