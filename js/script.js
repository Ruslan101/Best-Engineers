var text = new Array(); 

var semaphore = 0;

var sem = 0;

var bar_text = document.querySelectorAll('.bottom_bar_text');

text[0] = 'Great pixel perfect template which suites any needs. Some subheader text goes here.';
text[1] = 'This book is a treatise on the theory of ethics, very popular during the Renaissance.';
text[2] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

document.querySelector('#left').onclick = () => { textSlider(true); };
document.querySelector('#right').onclick = () => { textSlider(false); };

function textSlider(bool)
{
	if (bool)
	{
		if (semaphore == 0) bar_text[0].textContent = text[1];

		if (semaphore == 1) bar_text[0].textContent = text[0];

		if (semaphore == 2) bar_text[0].textContent = text[2];

		semaphore++;

		if (semaphore > 2) semaphore = 0;
	}
	else 
	{
		if (semaphore == 2) bar_text[0].textContent = text[1];

		if (semaphore == 1) bar_text[0].textContent = text[2];

		if (semaphore == 0) bar_text[0].textContent = text[0];

		semaphore--;

		if (semaphore < 0) semaphore = 2;
	}
}

setInterval(slider, 5000);

function slider ()
{
	if (sem == 0)
	{
		document.querySelector('#avatar').setAttribute("src", "img/twitter_icon.png");
		document.querySelector('.twitter > .follow > div > p').textContent = 'Atech ';
		document.querySelector('#mailUser').textContent = '@atech';
		document.querySelector('#mailUser').style.left = '54px';
		document.querySelector('.return > p').textContent = 'Vivamus congue risus ut venenatis consectetur. Nulla sit amet adipiscing enim, vitae rutrum nibh. Ut aliquet et augue consectetur tincidunt.';
		document.querySelector('.return > a').textContent = 'http://instagram.com/p/XKDSsKIhQG';
		document.querySelector('#date_pub').textContent = '15 July 2013';
		document.querySelector('#bool_1').setAttribute("src", "img/passive.png");
		document.querySelector('#bool_2').setAttribute("src", "img/passive.png");
		document.querySelector('#bool_3').setAttribute("src", "img/active.png");
	}
	if (sem == 1)
	{
		document.querySelector('#avatar').setAttribute("src", "img/tomothy ross.jpg");
		document.querySelector('.twitter > .follow > div > p').textContent = 'Tomothy ';
		document.querySelector('#mailUser').textContent = '@tomothy_ross';
		document.querySelector('#mailUser').style.left = '65px';
		document.querySelector('.return > p').textContent = 'Mauris orci purus, ultrices dapibus justo non, eleifend consequat lorem.'; 
		document.querySelector('.return > a').textContent = 'http://instagram.com/VJEVFVQC';
		document.querySelector('#date_pub').textContent = '28 April 2011';
		document.querySelector('#bool_1').setAttribute("src", "img/active.png");
		document.querySelector('#bool_2').setAttribute("src", "img/passive.png");
		document.querySelector('#bool_3').setAttribute("src", "img/passive.png");
	}
	if (sem == 2)
	{
		document.querySelector('#avatar').setAttribute("src", "img/ken ramos.jpg");
		document.querySelector('.twitter > .follow > div > p').textContent = 'Ken ';
		document.querySelector('#mailUser').textContent = '@ken_ramos';
		document.querySelector('#mailUser').style.left = '42px';
		document.querySelector('.return > p').textContent = 'Do not seek to change what has come before. Seek to create that which has not.';
		document.querySelector('.return > a').textContent = 'http://instagram.com/KOCNWNJCNWC';
		document.querySelector('#date_pub').textContent = '1 September 2012';
		document.querySelector('#bool_1').setAttribute("src", "img/passive.png");
		document.querySelector('#bool_2').setAttribute("src", "img/active.png");
		document.querySelector('#bool_3').setAttribute("src", "img/passive.png");
	}

	sem++;

	if (sem > 2) sem = 0;
}