let ops = {};

ops.add = function(p1, p2) {
    let p = p1 + p2;
    return p;
}

ops.div= function(p1, p2) {
    let p = p1 / p2;
    return p;
}

ops.power= function(p1, p2) {
    let p = p1 * p2;
    return p;
}

console.log(ops.add(10, 20));
console.log(ops.div(10, 20));
console.log(ops.power(10, 20));