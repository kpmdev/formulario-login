const containerNotificacion = document.querySelector('.notification'),
	inputName = document.getElementById('inputName'),
	inputEmail = document.getElementById('inputEmail');

const allInputs = document.querySelectorAll('.input');
const form = document.getElementById('form-registry');
const exprCamposVacios = /[a-z]/;

const exprEmail       = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const caracteres  = /^\w+([a-zA-Z])$/;

var nameUser = "Recuerda";

form.addEventListener('submit', (e) =>{
	containerNotificacion.classList.add('notification--is-visible');

	if(allInputs[0].value.length === 0 || allInputs[1].value.length === 0){
		containerNotificacion.innerHTML = `<p class=\"notification__error\"> ${nameUser.toLowerCase()}, todos los campos son obligatorios.</p> 
			<div class=\"notification__close\"> </div>`;
		e.preventDefault();
		inputName.focus();
	}
	
	else if(inputName.value.length <3){
		containerNotificacion.innerHTML = `<p class=\"notification__error\">El nombre es demasiado corto.</p> 
			<div class=\"notification__close\"> </div>`;
		e.preventDefault();
		inputName.focus();
	}
	else if(!caracteres.test(inputName.value)){
		containerNotificacion.innerHTML = `<p class=\"notification__error\">El nombre no puede contener números o caracteres especiales.</p> 
			<div class=\"notification__close\"> </div>`;
		e.preventDefault();
		inputName.focus();
	}
	else if(!exprEmail.test(inputEmail.value)){
		nameUser = inputName.value;
		containerNotificacion.innerHTML = `<p class=\"notification__error\"> ${nameUser.toLowerCase()}, el email no tiene un formato adecuado.</p> 
			<div class=\"notification__close\"> </div>`;
		e.preventDefault();
		inputEmail.focus();
	}
	else{
		containerNotificacion.innerHTML = `<p class=\"notification__error\"> Todo bien, todo correcto, y yo que me alegro.</p>
			<div class=\"notification__close\"> </div>`;
		//e.preventDefault();
	}
})

document.addEventListener('click', (e) =>{
	if(e.target.className === 'notification__close'){
		containerNotificacion.classList.remove('notification--is-visible');
	}
})

document.addEventListener('keyup', (e)=>{
	if(e.key === 'Escape'){
		containerNotificacion.classList.remove('notification--is-visible');
	}
})