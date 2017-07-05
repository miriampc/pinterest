"use strict";var render=function(a){a.empty();var t=$('<section class="components"></section>');t.append(Board()),a.append(t)},state={pin:null};$(function(a){$.get("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AaM1cX4ewT6F7X49kuLFgcKCWUAgFM4mt0PH-4dEIuuRXKAoAwAAAAA&fields=id%2Clink%2Cnote%2Cboard%2Cimage%2Cmetadata%2Coriginal_link%2Ccreator",function(a){if(!a)return alert("error");state.pin=a.data;var t=$("#root");render(t)})});var Board=function(){var a=$('<section class="board"></section>');state.pin.forEach(function(t){var e=$('<div class="board__image col-sm-6 col-md-4 col-lg-2">\n                            <img src="'+t.image.original.url+'" alt="Arabela Rojas">\n                          </div>');a.append(e)});$('<div class="board__title"></div>'),$('<div class="board__subtitle"></div>'),$('<div class="board__author">\n                          <img src="assets/images/arabelyuska.jpg" alt="Arabela Rojas">\n                          <h3>aki title</h3>\n                          <span>hola</span>\n                       </div>');return a};

// const Board = (update) => {

//   const boardContainer = $("<section class='board'></section>");

//   state.pin.forEach((e) =>{
//   	alert();
//   	console.log(e);
//     const pinImage = $("<div class='board__image'><img src='"+ e.image.original.url +"'></div>");
//     const pinTitle = $("<div class='board__title'><h2>" + e.metadata.article.name +"</h2></div>");
//     const pinSubTitle = $("<div class='board__subtitle'><p>"+ e.metadata.article.description +"</p></div>");
//     const pinAuthor = $("<div class='board__author'><img src='assets/images/arabelyuska.jpg' alt='Arabela Rojas'><h3>"+ e.creator.first_name + "</h3><p>"+" "+ e.board.name +"</p></div>");

//     boardContainer.append(pinImage);
//     boardContainer.append(pinTitle);
//     boardContainer.append(pinSubTitle);
//     boardContainer.append(pinAuthor);
    
//   })



//   pinImage.on('click', () => {
//     state.modal =  Modal;
//   })

//   return boardContainer;
// }