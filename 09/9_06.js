var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var odd = number.find(function(e) {
    if (e % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(odd);