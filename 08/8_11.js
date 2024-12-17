// 名前のない関数の定義（変数に関数を代入）
var area = function(base, height) {
    let result = base * height / 2;      //　底辺×高さ÷2
    return result;               // 結果を戻す
}
// 関数の実行
console.log(area(12, 10));