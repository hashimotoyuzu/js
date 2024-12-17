// オブジェクトの生成
let APPLE = {        // 「APPLE」オブジェクト
    name: 'APPLE',
    color: 'red',
    size: 'M',
    weight: 300
};

let ORANGE = {        // 「ORANGE」オブジェクト
    name: 'ORANGE',
    color: 'orange',
    size: 'L',
    weight: 200
};

let GRAPE = {      // 「GRAPE」オブジェクト
    name: 'GRAPE',
    color: 'purple',
    size: 'S',
    weight: 150
};

// オブジェクトを配列に保存
let fruits = [APPLE, ORANGE, GRAPE];

let totalWeight = 0;

// 3つのオブジェクトの総重量を出力
fruits.forEach(e => {
    totalWeight += e.weight;
});

console.log(totalWeight + 'g');

