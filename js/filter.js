function checkbox() {
	let checkbox = document.getElementById('vegan-chbox');

	if (checkbox.checked) {
		console.log('checked');
		

	} else {
		console.log('no checked');
	}
}

//let filter = $("[data-filter");
		//console.log(filter);
/*$("[data-cat]").each(function () {
	let cat = $(this).data('filter');
	if (cat != filter) {
		$(this).addClass('hide');
	}
});*/