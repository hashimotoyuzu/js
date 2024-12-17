// オブジェクトの生成
let taro = {        // 「taro」オブジェクト
    name: 'taro',
    height: 175.0,
    weight: 72,
    blood_type: 'A'
};

let jiro = {        // 「jiro」オブジェクト
    name: 'jiro',
    height: 178.0,
    weight: 76,
    blood_type: 'B'
};

let saburo = {      // 「saburo」オブジェクト
    name: 'saburo',
    height: 165.0,
    weight: 68,
    blood_type: 'O'
};

// 三つオブジェクトを配列に保存
let brother = [taro, jiro, saburo];

// 三つのオブジェクトのプロパティheightを出力
brother.forEach(e => {
    console.log(e.name + ':' + e.height + 'cm');
});
