var table=document.getElementById('tabelka');
var nazwaPola = ['imię', 'nazwisko', 'grupa', 'numer indeksu','e-mail'];
var dane = ['Tomasz', 'Budner', 'En1,L1','131600','tomasz.budner@student.put.poznan.pl'];
//var dane = ['X', 'Y', 'A','X','X@a.pl'];


function createTable () {
	var tableHTML='';
		for (var i = 1;i<=nazwaPola.length;i++){
			var tr='<tr>';
			for (var j=1;j<=2; j++) {
				if(j==1){
					var tekst=nazwaPola[i-1];
					var td = '<td>'+tekst+'</td>';
					tr+=td;	
				}else{
					var tekst=dane[i-1];
					var td = '<td>'+tekst+'</td>';
					tr+=td;
				}
				
			}
			tr +='</tr>';
			tableHTML+=tr;

		}
	
		table.innerHTML= tableHTML;
}

createTable();
		