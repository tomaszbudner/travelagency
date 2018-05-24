var clock = document.getElementById('clock');
var date = document.getElementById('date');


function dateAndClock() {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  var day = (time.getDate()).toString();
  var nameOfDay, month;


  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;

  clock.textContent = clockStr;
  

  switch (time.getDay()) {
    case 0:
        nameOfDay = "Niedziela";
        break;
    case 1:
        nameOfDay = "Poniedziałek";
        break;
    case 2:
        nameOfDay = "Wtorek";
        break;
    case 3:
        nameOfDay = "Środa";
        break;
    case 4:
        nameOfDay = "Czwartek";
        break;
    case 5:
        nameOfDay = "Piątek";
        break;
    case 6:
        nameOfDay = "Sobota";
}

switch (time.getMonth()) {
 case 1:
        month = "styczeń";
        break;
    case 2:
        month = "luty";
        break;
    case 3:
        month = "marzec";
        break;
    case 4:
        month = "kwiecień";
        break;
    case 5:
        month = "maj";
        break;
    case 6:
        month = "czerwiec";
        break;
    case 7:
        month = "lipiec";
        break;
    case 8:
        month = "sierpień";
        break;
    case 9:
        month = "wrzesień";
        break;
    case 10:
        month = "październik";
        break;
    case 11:
        month = "listopad";
        break;
    case 12:
        month = "grudzień"
}





  var dateStr = 'Dziś jest: ' + nameOfDay + ', ' + day + ' ' + month + ' ' 
  + (time.getFullYear()).toString() ;

  date.textContent = dateStr;
  
}

dateAndClock();
setInterval(dateAndClock, 1000);