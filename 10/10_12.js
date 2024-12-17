let o1 = { a: 1 }

// オブジェクト型を引数とした関数を定義
function ref(x) {
    x.a = 3;    //　引数に3を代入
    console.log('関数の中 :' + x.a);
}

console.log('関数の前 :' + o1.a);
ref(o1);
console.log('関数の後 :' + o1.a);