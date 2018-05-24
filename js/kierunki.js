var kierunki = document.querySelectorAll('#kierunki');

var elementIsClicked = false; 
function clickHandler(){ 
  elementIsClicked = true;
  alert('Strona w przygotowaniu');
}


 for (var i=0;i<kierunki.length;i++){
	kierunki[i].addEventListener('click', clickHandler);

 }