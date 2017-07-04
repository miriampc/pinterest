// console.log("hola");
'use strict';
const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if (state.header == true) {
    console.log("hola header");
    wrapper.append(Header(_ => render(root)));
  }
}

const state = {
  header : true
};


$(_ =>{
  const root = $('#root');
  render(root);
});
