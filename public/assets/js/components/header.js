// console.log("hola");
'use strict';
const Header = (update) => {
  const nav = $('<nav class="col-xs-12 col-lg-12"></nav>');
  const divBrand = $('<div class="navbar-brand col-xs-2 col-md-1 col-lg-1 flex"></div>');
  const brand = $('<a href="index.html"><img class="brand" alt="Logo Pinterest" src="assets/images/pinterest-logo.png"></a>');

  const divSearch = $('<div class="search hidden-xs col-md-8 col-lg-8 flex">');
  const btnSearch = $('<button type="submit" class="search-bg bg-btn search__input"></button>')
  const input = $('<input type="text" class="search__input search__input--sizew" placeholder="Buscar">');

  const divBtn = $('<div class="col-xs-10 col-md-3 col-lg-3 flex"></div>');
  const btnSearch2 = $('<div class="box hidden-md"><button type="submit" class="bg-btn search-bg box__btn"></button></div>')
  const btnSave = $('<div class="box "><button id="save" type="submit" class="bg-btn box__btn"></button></div>');
  const btnCategory = $('<div class="box "><button id="category" type="submit" class="bg-btn box__btn"></button></div>');
  const btnNotification = $('<div class="box "><button id="notify" type="submit" class="bg-btn box__btn"></button></div>');


  $('.components').append(nav);
  nav.append(divBrand);
  nav.append(divSearch);
  nav.append(divBtn);

  divBrand.append(brand);
  divSearch.append(btnSearch);
  divSearch.append(input);
  divBtn.append(btnSearch2);
  divBtn.append(btnSave);
  divBtn.append(btnCategory);
  divBtn.append(btnNotification);

  return nav;
}
