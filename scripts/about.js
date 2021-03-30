const headerParagraphLink = {
	'motivation-h1' : {
		'header' : document.querySelector('#motivation-h1'),
		'paragraph' : document.querySelector('#motivation-p')
	},
	'inspiration-h1' : {
		'header' : document.querySelector('#inspiration-h1'),
		'paragraph' : document.querySelector('#inspiration-p')
	},
	'passion-h1' : {
		'header' : document.querySelector('#passion-h1'),
		'paragraph' : document.querySelector('#passion-p')
	},
	'story-h1' : {
		'header' : document.querySelector('#story-h1'),
		'paragraph' : document.querySelector('#story-p')
	}
}

function selectHeaderParagraph(e) {
	headerParagraphLink[e.target.id]['header'].classList.add('active-header');
	headerParagraphLink[e.target.id]['paragraph'].classList.add('display-p');
}

function deselectHeaderParagraph(e) {
	for (const pair in headerParagraphLink) {
		if (headerParagraphLink[pair]['header'].id !== e.target.id) {
			headerParagraphLink[pair]['header'].classList.remove('active-header');
			headerParagraphLink[pair]['paragraph'].classList.remove('display-p');
		}
	}
}

function changeSelection(e) {
	selectHeaderParagraph(e);
	deselectHeaderParagraph(e);
}

document.querySelectorAll('.about-me-h1').forEach(function(element) {
	element.addEventListener('click', (e) => {
		changeSelection(e);
	})
})

