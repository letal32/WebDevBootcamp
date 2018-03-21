function average (numList){
    var sum = 0;

    numList.forEach(function sumArray(num){
        sum += num;
    });

    return Math.floor(sum/numList.length + 0.5);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));