function printReverse(array){

    for (var i=array.length-1; i>=0; i--){
        console.log(array[i]);
    }
}

function isUniform(array){

    var firstElement = array[0];
    var result = true;
    array.forEach(function(item){
        if (item !== firstElement){
            result = false;
        }
    });

    return result;
}

function sumArray(array){

    var sum = 0;
    array.forEach(function(item){
        sum += item;
    });

    return sum;
}

function max(array){
    var curMax = array[0];

    array.forEach(function(item){
        if (item > curMax){
            curMax = item;
        }
    });

    return curMax;

}

function myForEach(arr, func){

    for (var i=0; i < arr.length; i++){
        func(arr[i]);
    }
}

Array.prototype.myForEach = function(func){
    for (var i=0; i < this.length; i++){
        func(this[i]);
    }
}