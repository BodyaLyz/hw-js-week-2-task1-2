// task one - 1

var ua = 26;

function convertUA () {
	var usa = document.getElementById('convert').value;
	result = usa * ua;
	document.getElementById("res").innerHTML = "Your money ua:"+"  "+ result;
}

function convertUSA () {
	var usa = document.getElementById('converttwo').value;
	result = usa / ua;
	document.getElementById("res").innerHTML = "Your money usa:"+"  "+ result;
}

// task one - 2

function findMinMax() {
    document.getElementById("result").innerHTML = "max " + Math.max(1,23,-5,11) + ", min " + Math.min(1,23,-5,11);
}

// task one-3 

var elmt = [1,4,2];

function average() {
	var sum = 0;	
	for( var i = 0; i < elmt.length; i++ ){
    sum += parseInt( elmt[i] ); 
	var avg = sum/elmt.length;
		
document.getElementById('res2').innerHTML = "Сума:"+' '+ sum + "<br> Cереднє значення:"+" "+ avg.toFixed(2);
}
}

// task two

function recursion(num) {
    if(num >= 1) {
    document.write( ' ' + num);
}
recursion(10)






