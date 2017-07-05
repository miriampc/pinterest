const Board = () => {
  // state.pin.forEach((element) => {
  //   console.log(element.image.original.url);
  // });
console.log(state.pin);
  const boardContainer = $('<section class="board"></section>');

  state.pin.forEach((e) => {
    console.log(e);
      const pinImage = $(`<div class="board__image col-sm-6 col-md-4 col-lg-2">
                            <img src="${e.image.original.url}" alt="Arabela Rojas">
                          </div>`);

      const pinTitle = $("<div class='board__title'><h2>" + e.metadata.article.name +"</h2></div>");
      const pinSubTitle = $("<div class='board__subtitle'><p>"+ e.metadata.article.description +"</p></div>");
      const pinAuthor = $("<div class='board__author'><img src='assets/images/arabelyuska.jpg' alt='Arabela Rojas'><h3>"+ e.creator.first_name + "</h3><p>"+" "+ e.board.name +"</p></div>");

      boardContainer.append(pinImage);
      boardContainer.append(pinTitle);
      boardContainer.append(pinSubTitle);
      boardContainer.append(pinAuthor);


      
  })

  // const pintitle = $(`<div class="board__title"></div>`);
  // const pinSubTitle = $(`<div class="board__subtitle"></div>`);
  // const pinAuthor = $(`<div class="board__author">
  //                         <img src="assets/images/arabelyuska.jpg" alt="Arabela Rojas">
  //                         <h3>aki title</h3>
  //                         <span>hola</span>
  //                      </div>`);

  return boardContainer;
}
