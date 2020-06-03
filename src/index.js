const pics = document.querySelector('.pictures');
const dots = document.getElementById('dots');

const createPic_a = (i) => {
	let e = document.createElement('a');
	let link = ['#img/picture_', i, '.jpeg'].join('');
	e.setAttribute('href', link);
	return e;
};

const createPic_img = (i) => {
	let e = document.createElement('img');
	let link = ['img/picture_', i, '.jpeg'].join('');
	e.setAttribute('src', link);
	let div = document.createElement('div');
	div.setAttribute('id', link);
	div.appendChild(e);
	return div;
};

const back = document.createElement('div');
back.setAttribute('id', 'back');
back.innerHTML = '&#8249;';
back.addEventListener('click', (e) => {
	arrow(e, 'back');
});
dots.appendChild(back);

[...Array(11).keys()].forEach((i) => {
	pics.appendChild(createPic_img(i + 1));
	dots.appendChild(createPic_a(i + 1));
});

const forward = document.createElement('div');
forward.setAttribute('id', 'forward');
forward.innerHTML = '&#8250;';
forward.addEventListener('click', (e) => {
	arrow(e, 'forward');
});
dots.appendChild(forward);

const arrow = (e, which) => {};
