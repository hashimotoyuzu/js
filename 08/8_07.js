let ops = [];

ops[0] = function(p1, p2) {
    let p = p1 + p2;
    return p;
}

ops[1] = function(p1, p2) {
    let p = p1 / p2;
    return p;
}

ops[2] = function(p1, p2) {
    let p = p1 * p2;
    return p;
}

// 関数の実行
for (let i = 0; i < ops.length; i++) {
    console.log(ops[i](10, 20));
}