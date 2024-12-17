let car = {                    // carオブジェクト
    distance_per: 60.0,        // プロパティ 1時間辺りの走行距離

    distance(t) {              // メソッド 走行距離を計算する関数
        return this.distance_per * t;
    }
};

let bicycle = {                // bicycleブジェクト
    distance_per: 15.0,        // プロパティ 1時間辺りの走行距離

    distance(time) {           // メソッド 走行距離を計算する関数
        return this.distance_per * time;
    }
};

let taro = {
    name:"taro",        // 名前
    mobile:null,        // 乗っている乗り物

    rade(m) {           // 乗り物にのる
        this.mobile = m;
    },

    drive(t) {          // 乗り物にのって運転して移動した距離
        return this.mobile.distance(t);
    }
}

// オブジェクトを使ったプログラム
// ① taroがcarに乗った
taro.rade(car);
console.log(taro);

// ② taroは車に乗って、2時間移動した。その時の走行距離
console.log(taro.drive(2));

// ③ taroは自転車に乗り換えた
taro.rade(bicycle);
console.log(taro);

// ④ taroは自転車に乗って、2時間移動した。その時の走行距離
console.log(taro.drive(2));