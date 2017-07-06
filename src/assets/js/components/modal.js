const Modal = () => {
	console.log(state.pinSelected);

	const modalBody = $("<div class='containerModal'></div>");
	const modalContainer = $("<div class='modalBody'></div>");
	const close = $("<span class='modal__close'><i class='fa fa-times'></i></span>");

	$('.modal').append(close);

	if(state.pinSelected.metadata.article != undefined){
		const modalTitle = $("<div><h2>" + state.pinSelected.metadata.article.name+"</h2></div>");
		modalContainer.append(modalTitle);
	}

	const modalImg = $("<img class='modalBody__img' src='"+ state.pinSelected.image.original.url +"'>");
	modalContainer.append(modalImg);

	if(state.pinSelected.metadata.link != undefined){
		const modalInforA = $("<div class='modalBody__inforA'></div>");
		const divA = $("<div></div>");
		if(state.pinSelected.metadata.link.favicon != undefined){
			const infoFav = $(`<a href="#"><img src="${state.pinSelected.metadata.link.favicon}" alt="favicon"></a>`);
			divA.append(infoFav);
		}
		if(state.pinSelected.metadata.link.site_name != undefined){
			const infoSiteName = $("<span>Article from <strong> "+ state.pinSelected.metadata.link.site_name +"</strong></span>");
			divA.append(infoSiteName);
		}
		const modalButton = $("<button>Read it</button>");

		modalInforA.append(divA);
		modalInforA.append(modalButton);

		modalContainer.append(modalInforA);
	}

	if(state.pinSelected.metadata.article != undefined){
			const modalInfoB = $("<div><p>"+ state.pinSelected.metadata.article.description +"</p><p>Comments</p></div>");
			modalContainer.append(modalInfoB);
	}

	const modalAuthor = $("<div class='modalBody__author'></div>");
	const imgAuthor = $("<p><img src='assets/images/arabelyuska.jpg'><span><strong>"+ state.pinSelected.creator.first_name + " "+ "</strong> saved to <strong> "+ " "+state.pinSelected.board.name +"</strong></span></p>");

	modalAuthor.append(imgAuthor);

	if(state.pinSelected.note != undefined){
      const descriptionAuthor = $("<p>"+ state.pinSelected.note +"</p>");
      modalAuthor.append(descriptionAuthor);
	}

	const boardAuthor = $("<p> +6.94k boards</p>");
	modalAuthor.append(boardAuthor);
	modalContainer.append(modalAuthor);
	modalBody.append(modalContainer);

	close.on('click', () => {
        $('.modal').hide();
        $('body').css('overflow','scroll');
    })

	return modalBody;
}
