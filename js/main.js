const form = document.getElementById('form');
const input = document.querySelector('.footer-input');
const sendButton = document.querySelector('.footer-cta');
let alertParagraph = document.querySelector('.form-alert');
let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

form.addEventListener('click',(e)=>{
	e.preventDefault();
	if(!emailValidation.test(input.value)) {
		alertParagraph.style.display = "block";
		input.style.border = "1px solid #f00";
	}
	else {
		alertParagraph.removeAttribute('style');
		input.removeAttribute('style');
	}
})