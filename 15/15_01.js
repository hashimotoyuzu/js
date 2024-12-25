// 商品クラスの生成
class Item {
    // コンストラクター
    constructor(id, name, stock) {
        //　引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }

    // メソッド
    // Idの値を返す
    getId() {
        return this.id;
    }

    // nameの値を返す
    getName() {
        return this.name;
    }

    // stockの値を返す
    getStock() {
        return this.stock;
    }

    // 商品の追加
    addStock(num) {
        this.stock += num;
    }

    // 商品の販売
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

// インスタンスの生成
let item1 = new Item('0001', 'ソファベッド', 100);
let item2 = new Item('0002', 'シングルベッド', 100);
let item3 = new Item('0003', '子ども用ベッド', 10);

// プロパティを取得して表示
console.log(item1.getId(), item1.getName(), item1.getStock());
console.log(item2.getId(), item2.getName(), item2.getStock());
console.log(item3.getId(), item3.getName(), item3.getStock());

// ソファベッドが20個販売された
item1.sale(20);
// シングルベッドが10個販売された
item2.sale(10);

// 子ども用ベッドが1個販売された
item3.sale(1);

// プロパティを取得して表示
console.log(item1.getId(), item1.getName(), item1.getStock());
console.log(item2.getId(), item2.getName(), item2.getStock());
console.log(item3.getId(), item3.getName(), item3.getStock());

// ソファベッドの在庫を30個追加
item1.addStock(30);

// プロパティを取得して表示
console.log(item1.getId(), item1.getName(), item1.getStock());
console.log(item2.getId(), item2.getName(), item2.getStock());
console.log(item3.getId(), item3.getName(), item3.getStock());
