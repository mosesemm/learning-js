

var modal = document.getElementById('myModal');

document.forms['product_form']['submit'].onclick = function(event){

	event.preventDefault();
	//alert('Wired up correctly: '+ document.forms['product_form']['name'].value);
	modal.style.display = "block";



}

document.getElementsByClassName('close')[0].onclick = function() {
	modal.style.display = "none";
}

//in case want the modal to disappear when clicking other places other than its contents
/*window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}*/