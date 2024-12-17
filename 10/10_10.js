// オブジェクト型
let o1 = { name: 'o1です', p: 1 }   // ①オブジェクトo1
let o2 = { name: 'o2です', p: 2 }   // ②オブジェクトo2

console.log(o1);
console.log(o2);

o2 = o1;        // ③ o2にオブジェクトo1の記憶場所を代入

console.log(o1);
console.log(o2);    // ④o2の内容を出力

o2.p = 3;       // ⑤o2のプロパティpに3を代入

console.log(o1.p);
console.log(o2.p);