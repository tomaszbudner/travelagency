var poleNazwaMiasta = document.getElementById('cityName');
var poleOpisMiasta = document.getElementById('cityContent');
var textBox = document.getElementById('commentBox');

var nazwaMiasta = '';
var opis = '';

function drawSquare(){
	var x = event.clientX - 200;     // Get the horizontal coordinate
	var y = event.clientY - 100;    // Get the vertical coordinate

    textBox.style.position = "absolute";
    textBox.style.display = '';
	textBox.style.top = y.toString() +'px';
	textBox.style.left = x.toString()+'px';
}

function setContent(x,y){
	poleNazwaMiasta.textContent = x;
    poleOpisMiasta.textContent = y;
}

$("#Buenos").on("click", function(e){
    e.preventDefault();
    drawSquare();

    nazwaMiasta = 'Buenos Aires';
    opis = 'stolica Argentyny, największe miasto tego kraju i jedno z największych w Ameryce Południowej. '
    
    setContent(nazwaMiasta,opis);

});

$("#nowyJork").on("click", function(e){
    e.preventDefault();
    
    drawSquare();

    nazwaMiasta = 'Nowy Jork';
    opis = 'To miasto nigdy nie śpi';
    
    setContent(nazwaMiasta,opis);
});


$("#Paryz").on("click", function(e){
    e.preventDefault();
    
    drawSquare();

    nazwaMiasta = 'Paryż';
    opis = 'Miasto zakochanych, do którego chce się wracać.';
    
    setContent(nazwaMiasta,opis);

});

$("#tajlandia").on("click", function(e){
    e.preventDefault();
    
    drawSquare();

    nazwaMiasta = 'Tajlandia';
    opis = 'Rajski kraj z pięknymi plażami.';
    
    setContent(nazwaMiasta,opis);

});

$("#australia").on("click", function(e){
    e.preventDefault();
    
    drawSquare();

    nazwaMiasta = 'Australia';
    opis = 'Tylko tutaj spotkasz kangura na ulicy';
    
    setContent(nazwaMiasta,opis);

});