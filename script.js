// task one - 1

var uah = 26;

function convertToUah() {
    var usd = document.getElementById('convert').value;
    result = usd * uah;
    document.getElementById("res").innerHTML = "Your money UAH:" + "  " + result;
}

function convertToUsd() {
    var usd = document.getElementById('converttwo').value;
    result = usd / uah;
    document.getElementById("res").innerHTML = "Your money USD:" + "  " + result;
}

// task one - 2

var given = [1, 23, -5, 11];

function findMinMax(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    document.getElementById("result").innerHTML = "max: " + max + ", min: " + min;
    return {
        Min: min,
        Max: max
    }
}
findMinMax(given)

// task one - 3 

var elmt = [1, 4, 2];

function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
        var avg = sum / arr.length;

        document.getElementById('res2').innerHTML = "Сума:" + ' ' + sum + "<br> Cереднє значення:" + " " + avg.toFixed(2);
    }
}

average(elmt);

// task two

function recursion(n) {
    if (n >= 1) {
        document.write(' ' + (n));
        recursion(n - 1);
    }
}
recursion(10)

