let jiro = {
    name: 'jiro',
    height: 178.0,
    weight: 76,
    blood_type: 'B'
}

let saburo = {
    name: 'saburo',
    height: 165.0,
    weight: 68,
    blood_type: 'O'
}

console.log(jiro);                       // オブジェクトjiroを表示
console.log(Object.keys(jiro));     // 引数のオブジェクトの表示可能なプロパティの名前を配列として返します
console.log(Object.entries(jiro));  // 引数のオブジェクトの表示可能なプロパティの名前と値を配列として返します
console.log(Object.values(jiro));   // 引数で指定されたオブジェクトが持つ表示可能なプロパティの値を配列として返します

console.log(Object.is(jiro, saburo)); // 比較して同一値ならばTrue,そうでなければfalse