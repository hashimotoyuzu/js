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

// BMIを計算する関数
function calc_bmi(height, weight) {
    // BMIの計算
    let bmi = weight / ((height * 0.01)*(height * 0.01));
    return bmi;
}

// 三つのオブジェクトのBMIを出力
brother.forEach(e => {
    let bmi = calc_bmi(e.height, e.weight);
    console.log(e.name + ' bmi:' +  Math.round(bmi * 100) / 100);
});