// console.log("hola");
'use strict';
const Header = (update) => {
  const nav = $('<nav class="col-xs-12 col-lg-12"></nav>');
  const divBrand = $('<div class="navbar-brand col-xs-1 col-lg-1"></div>');
  const divSearch = $('<div class="search col-xs-8 col-lg-8">');
  const divBtn = $('<div class="navbar-btn col-xs-3 col-lg-3"></div>')

  const brand = $('<a href="index.html"><img class="brand" alt="Logo Pinterest" src="assets/images/pinterest-logo.png"></a>');
  const btnSearch = $('<button type="submit" class="search__input bg-btn"></button>')
  const input = $('<input type="text" class="search__input search__input--sizew" placeholder="Buscar">');
  const btnSave = $('<button type="submit" class="btn btn-default">Guardado</button>');
  const btnCategory = $('<button type="submit" class="btn btn-default">Categorias</button>');
  const btnNotification = $('<button type="submit" class="btn btn-default">Notificaciones</button>');

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
