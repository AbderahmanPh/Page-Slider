const pages = document.querySelectorAll('.page');
const translateAmout = 100;
let translate = 0;

slide = (direction) => {
	direction === 'next' ? translate -= translateAmout : translate += translateAmout;
	
	pages.forEach(
		pages => (pages.style.transform = `translateX(${translate}%)`)
	)
}