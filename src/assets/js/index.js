"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components">board</section>');
    console.log(state.pin);
    board();
    // section.append(Board());

    root.append(section);
};
const state = {
    pin : null
};

$( _ => {
  const url='https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AaM1cX4ewT6F7X49kuLFgcKCWUAgFM4mt0PH-4dEIuuRXKAoAwAAAAA&fields=id%2Clink%2Cnote%2Cboard%2Cimage%2Cmetadata%2Coriginal_link%2Ccreator';
    $.get(url,(json) => {
        if(!json){
          return alert("error");
        }
        state.pin = json.data;
        const root = $('#root');
        render(root);
    });
})
