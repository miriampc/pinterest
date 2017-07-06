 // console.log("hola");
'use strict';
const Header = (update) => {
  // nav principal
  const header = $('<header class="header-container" col-xs-12 col-lg-12"></header>');
  const container = $('<div id="container" class="navigation"></div>')
  const divBrand = $('<div class="navigation__brand col-xs-2 col-md-1 col-lg-1"></div>');
  const brand = $('<a href="index.html"><img alt="Logo Pinterest" src="assets/images/pinterest-logo.png"></a>');

  const divSearch = $('<div class="navigation__search hidden-xs col-md-8 col-lg-8">');
  const btnSearch = $('<button type="submit"></button>')
  const input = $('<input type="text" class="navigation__search--sizew" placeholder="Buscar">');

  const divBtn = $('<div class="navigation__buttons col-xs-10 col-md-3 col-lg-3"></div>');
  const btnSearch2 = $('<div class="hidden-md"><button id="searchbtn" type="submit"></button></div>')
  const btnSave = $('<div><button id="save" type="submit"></button></div>');
  const btnCategory = $('<div><button id="category" type="submit"></button></div>');
  const btnNotification = $('<div><button id="notify" type="submit"></button></div>');

  //nav
  const sectionBoard = $('<div id="sectionBoard" class="header-container__boardTitle col-lg-12 col-md-12 col-xs-12"></div>');
  const divIcons = $('<div class="icons-container col-lg-4"></div>');
  const divEdit = $('<div class="col-lg-2"><a href="#"><img src="assets/images/pencil.png"></a></div>');
  const divMove = $('<div class="col-lg-2"><a href="#"><img src="assets/images/arrow.png"></a></div>');
  const divMore = $('<div class="col-lg-2"><a href="#"><img src="assets/images/more.png"></a></div>');

  const divText = $('<div class="show col-lg-7 col-xs-8"><h1>Web UI</h1></div>')

  $('.components').append(header);
  header.append(container);
  container.append(divBrand);
  container.append(divSearch);
  container.append(divBtn);
  header.append(sectionBoard);

  divBrand.append(brand);
  divSearch.append(btnSearch);
  divSearch.append(input);
  divBtn.append(btnSearch2);
  divBtn.append(btnSave);
  divBtn.append(btnCategory);
  divBtn.append(btnNotification);

  sectionBoard.append(divIcons);
  sectionBoard.append(divText);
  divIcons.append(divEdit);
  divIcons.append(divMove);
  divIcons.append(divMore);

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 200) {
      divText.fadeIn("slow");
      divIcons.fadeIn("slow");
    } else {
      divText.fadeOut("slow");
      divIcons.fadeIn("slow");
    }
  });
  return header;
}
