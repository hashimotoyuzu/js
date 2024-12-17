let p1 = 1;

// プレミティブ型を引数とした関数を定義
function ref(x) {
    x = 3;    //　引数に3を代入
    console.log('関数の中 : ' + x);
}

console.log('関数の前 :' + p1);
ref(p1);
console.log('関数の後 :' + p1);