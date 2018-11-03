// task one - 1

var ua = 26;

function exchange () {
	var usa = document.getElementById('exc').value;
	result = usa * ua;
	document.getElementById("res").innerHTML = "Your money ua:"+"  "+ result;
}

function exchange2 () {
	var usa = document.getElementById('exc2').value;
	result = usa / ua;
	document.getElementById("res").innerHTML = "Your money usa:"+"  "+ result;
}

// task one - 2

function findmax() {
    document.getElementById("result").innerHTML = Math.max(1,23,-5,11);
}

function findmin() {
    document.getElementById("result").innerHTML = Math.min(1,23,-5,11);
}

// task one-3 

var elmt = [1,4,2]
var sum = 0;

for( var i = 0; i < elmt.length; i++ ){
    sum += parseInt( elmt[i] ); 
}

var avg = sum/elmt.length;

function average () {
document.getElementById('res2').innerHTML = "Сума:"+' '+ sum + "<br> Cереднє значення:"+" "+ avg.toFixed(2);
}

// task two

recursion(1);

function recursion(num){
  if (num < 10) 
    recursion(num + 1);
document.write( ' ' + num);
 }

