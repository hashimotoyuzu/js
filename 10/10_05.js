let car = {                    // carオブジェクト
    distance_per: 60.0,        // プロパティ 1時間辺りの走行距離

    distance(t) {              // メソッド 走行距離を計算する関数
        return this.distance_per * t;
    }
};

// 2時間運転した場合の走行距離
console.log('走行距離:' + car.distance(2) + 'km');