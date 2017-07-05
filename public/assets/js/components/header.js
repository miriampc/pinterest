// console.log("hola");
'use strict';
const Header = (update) => {
  const nav = $('<nav class="col-xs-12 col-lg-12"></nav>');
  const divBrand = $('<div class="navbar-brand col-xs-2 col-lg-1 flex"></div>');
  const brand = $('<a href="index.html"><img class="brand" alt="Logo Pinterest" src="assets/images/pinterest-logo.png"></a>');

  const divSearch = $('<div class="search col-xs-4 col-lg-8  flex">');
  const btnSearch = $('<button id="l" type="submit" class="bg-btn search__input"></button>')
  const input = $('<input type="text" class="search__input search__input--sizew hidden-xs" placeholder="Buscar">');

  const divBtn = $('<div class="navbar-btn col-xs-6 col-lg-3 flex"></div>')
  const btnSave = $('<div class="flex__item"><button id="save" type="submit" class="bg-btn"></button></div>');
  const btnCategory = $('<div class="flex__item"><button id="category" type="submit" class="bg-btn"></button></div>');
  const btnNotification = $('<div class="flex__item"><button id="notify" type="submit" class="bg-btn"></button></div>');


  $('.components').append(nav);
  nav.append(divBrand);
  nav.append(divSearch);
  nav.append(divBtn);

  divBrand.append(brand);
  divSearch.append(btnSearch);
  divSearch.append(input);
  divBtn.append(btnSave);
  divBtn.append(btnCategory);
  divBtn.append(btnNotification);

  return nav;
}
