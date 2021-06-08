function animateForm(){

const arrows=document.querySelectorAll('.fa-arrow-down');

arrows.forEach(arrow=>{
	arrow.addEventListener("click",()=>{
		const input=arrow.previousElementSibling;
		const parent=arrow.parentElement;
		const nextForm=parent.nextElementSibling;
		

		if (input.type==="text" && ValidationUser(input)) {
			nextSlide(parent,nextForm);
		}else if(input.type==="email" && ValidationEmail(input)) {
			nextSlide(parent,nextForm);
		}else if (input.type==="password" && ValidationUser(input)) {
			nextSlide(parent,nextForm);
		}
	});
});
function ValidationUser(user){
	if (user.value.length<6) {
		error("red");
	}else{
		error("rgb(87,189,130)");
		return true;
	}
}

function ValidationEmail(email){
		const Validation= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if(Validation.test(email.value)){
			return true;
		}else{
			error("red");

		}
}
}
function error(color){
	document.body.style.backgroundColor=color;
}

function nextSlide(parent,nextForm){
	parent.classList.add("inactive");
	parent.classList.remove("active");
	nextForm.classList.add("active");


}

animateForm();

