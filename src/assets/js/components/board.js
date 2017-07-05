const Board = () => {
  const boardContainer = $('<section class="board"></section>');
  state.pin.forEach((element) => {
      const pinImage = $(`<div class="board__image col-sm-6 col-md-4 col-lg-2">
                            <img src="${element.image.original.url}" alt="Arabela Rojas">
                          </div>`);
      boardContainer.append(pinImage);
  })
  const pintitle = $(`<div class="board__title"></div>`);
  const pinSubTitle = $(`<div class="board__subtitle"></div>`);
  const pinAuthor = $(`<div class="board__author">
                          <img src="assets/images/arabelyuska.jpg" alt="Arabela Rojas">
                          <h3>aki title</h3>
                          <span>aki sub</span>
                       </div>`);
  return boardContainer;
}
