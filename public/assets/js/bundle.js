"use strict";var render=function(a){a.empty();var e=$('<section class="components"></section>');e.append(Header(function(e){return render(a)})),e.append(Board()),a.append(e)},state={pin:null,header:null,pinSelected:null};$(function(a){$.get("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AaM1cX4ewT6F7X49kuLFgcKCWUAgFM4mt0PH-4dEIuuRXKAoAwAAAAA&fields=id%2Clink%2Cnote%2Cboard%2Cimage%2Cmetadata%2Coriginal_link%2Ccreator",function(a){if(!a)return alert("error");state.pin=a.data;var e=$("#root");render(e)})});var Board=function(){var a=$('<section class="main-container"></section>'),e=$('<div class="main-container__user col-xs-12">\n                        <h1>'+state.pin[0].board.name+'</h1>\n                        <div class="col-xs-6 col-sm-6 col-md-6">\n                          <p>30 pines</p>\n                          <p>83 seguidores</p>\n                        </div>\n                        <div class="col-xs-6 col-sm-6 col-md-6"><img src="assets/images/arabelyuska.jpg" alt="Arabela Rojas"></div>\n                    </div>');a.append(e);var i=$('<div class="board"></div>'),n=$('<div class="pin__newPin">\n                        <div><a href="" class="fa fa-plus"></a></div>\n                        <h2>Guardar Pin</h2>\n                    </div>');return i.append(n),state.pin.forEach(function(a){var e=$('<div class="pin"></div>'),n=$('<div class="pin__image">\n                          <img src="'+a.image.original.url+'" alt="Arabela Rojas">\n                        </div>'),t=$('<div class="pin__author">\n                              <div class="col-xs-2 col-sm-2 col-md-2"><img src="assets/images/arabelyuska.jpg" alt="Arabela Rojas"></div>\n                              <div class="col-xs-8 col-sm-8 col-md-8">\n                                <h3>'+a.creator.first_name+"</h3>\n                                <span>"+a.board.name+"</span>\n                              </div>\n                           </div>");if(e.append(n),void 0!=a.metadata.article){var s=$('<div class="pin__title"><h2>'+a.metadata.article.name+"</h2></div>"),d=$('<div class="pin__subtitle">'+a.metadata.article.description+"</div>");e.append(s),e.append(d)}e.append(t),i.append(e),e.on("click",function(e){state.pinSelected=a,console.log(state.pinSelected),$(".modal").empty(),$(".modal").append(Modal()),$(".modal").css("overflow","scroll"),$("body").css("overflow","hidden"),$(".modal").show()})}),a.append(i),a},Header=function(a){var e=$('<header class="header-container" col-xs-12 col-lg-12"></header>'),i=$('<div id="container" class="navigation"></div>'),n=$('<div class="navigation__brand col-xs-2 col-md-1 col-lg-1"></div>'),t=$('<a href="index.html"><img alt="Logo Pinterest" src="assets/images/pinterest-logo.png"></a>'),s=$('<div class="navigation__search hidden-xs col-md-8 col-lg-8">'),d=$('<button type="submit"></button>'),o=$('<input type="text" class="navigation__search--sizew" placeholder="Buscar">'),l=$('<div class="navigation__buttons col-xs-10 col-md-3 col-lg-3"></div>'),p=$('<div class="hidden-md"><button id="searchbtn" type="submit"></button></div>'),c=$('<div><button id="save" type="submit"></button></div>'),r=$('<div><button id="category" type="submit"></button></div>'),v=$('<div><button id="notify" type="submit"></button></div>'),m=$('<div id="sectionBoard" class="header-container__boardTitle col-lg-12 col-md-12 col-xs-12"></div>'),g=$('<div class="icons-container col-lg-4"></div>'),u=$('<div class="col-lg-2"><a href="#"><img src="assets/images/pencil.png"></a></div>'),f=$('<div class="col-lg-2"><a href="#"><img src="assets/images/arrow.png"></a></div>'),b=$('<div class="col-lg-2"><a href="#"><img src="assets/images/more.png"></a></div>'),h=$('<div class="show col-lg-7 col-xs-8"><h1>Web UI</h1></div>');return $(".components").append(e),e.append(i),i.append(n),i.append(s),i.append(l),e.append(m),n.append(t),s.append(d),s.append(o),l.append(p),l.append(c),l.append(r),l.append(v),m.append(g),m.append(h),g.append(u),g.append(f),g.append(b),$(window).scroll(function(){$(this).scrollTop()>200?(h.fadeIn("slow"),g.fadeIn("slow")):(h.fadeOut("slow"),g.fadeIn("slow"))}),e},Modal=function(){console.log(state.pinSelected);var a=$("<div class='containerModal'></div>"),e=$("<div class='modalBody'></div>"),i=$("<span class='modal__close'><i class='fa fa-times'></i></span>");if($(".modal").append(i),void 0!=state.pinSelected.metadata.article){var n=$("<div><h2>"+state.pinSelected.metadata.article.name+"</h2></div>");e.append(n)}var t=$("<img class='modalBody__img' src='"+state.pinSelected.image.original.url+"'>");if(e.append(t),void 0!=state.pinSelected.metadata.link){var s=$("<div class='modalBody__inforA'></div>"),d=$("<div></div>");if(void 0!=state.pinSelected.metadata.link.favicon){var o=$('<a href="#"><img src="'+state.pinSelected.metadata.link.favicon+'" alt="favicon"></a>');d.append(o)}if(void 0!=state.pinSelected.metadata.link.site_name){var l=$("<span>Article from<strong> "+state.pinSelected.metadata.link.site_name+"</strong></span>");d.append(l)}var p=$("<button>Read it</button>");s.append(d),s.append(p),e.append(s)}if(void 0!=state.pinSelected.metadata.article){var c=$("<div><p>"+state.pinSelected.metadata.article.description+"</p><p>Comments</p></div>");e.append(c)}var r=$("<div class='modalBody__author'></div>"),v=$("<p><img src='assets/images/arabelyuska.jpg'><span><strong>"+state.pinSelected.creator.first_name+" </strong> saved to <strong>  "+state.pinSelected.board.name+"</strong></span></p>");if(r.append(v),void 0!=state.pinSelected.note){var m=$("<p>"+state.pinSelected.note+"</p>");r.append(m)}var g=$("<p>+6.94k boards</p>");return r.append(g),e.append(r),a.append(e),i.on("click",function(){$(".modal").hide(),$("body").css("overflow","scroll")}),a};