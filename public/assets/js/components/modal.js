const Modal = (update) => {

	const modalContainer = $("<div></div>");
	const modalTitle = $("<div><h2>" + state.pin.metadata.article.name+"</h2></div>");
	const modalImg = $("<img src='"+ state.pin.image.original.url +"'>");
	const modalInforA = $("<div><span><img src='"+ state.pin.metadata.link.favicon +"'></span><span>Article from "+ state.pin.metadata.link.site_name +"</span><button>Read it</button></div>");
	const modalInfoB = $("<div><p>"+ state.pin.metadata.article.description +"</p><p>Comments</p></div>");
	const modalAuthor = $("<div><p><span><img src='assets/images/arabelyuska.jpg'</span><span><h4>"+ state.pin.creator.first_name + "</h4> saved to <h4> "+state.pin.board.name +"</h4></span></p><p>"+ state.pin.metadata.article.description +"</p><p>+6.94k boards</p></div>");


	modalContainer.append(modalTitle);
	modalContainer.append(modalImg);
	modalContainer.append(modalInforA);
	modalContainer.append(modalInfoB);
	modalContainer.append(modalAuthor);

	return modalContainer;
}
