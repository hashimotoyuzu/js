
//　商品一覧
const itemList = [
    {'id':'0001', 'name':'ソファベッド', 'price':50000, 'tags':['家具','ベッド','ソファ','寝具']},
    {'id':'0002', 'name':'シングルベッド','price':30000, 'tags':['家具','ベッド','寝具']},
    {'id':'0003', 'name':'子ども用ベッド','price':20000, 'tags':['家具','ベッド','寝具','子ども部屋家具']},
    {'id':'0001', 'name':'ソファ','price':10000, 'tags':['家具','ソファ']},
    {'id':'0002', 'name':'キューブボックス','price':4000, 'tags':['家具','家具・ラック','収納システム']},
    {'id':'0003', 'name':'オープンラック','price':5000, 'tags':['家具','家具・ラック','収納システム']},
    {'id':'0007', 'name':'コンピュータデスク','price':55000, 'tags':['家具','テーブル・椅子']},
    {'id':'0008', 'name':'サイドテーブル','price':4000, 'tags':['家具','テーブル・椅子']},
    {'id':'0009', 'name':'ダイニングテーブル','price':4000, 'tags':['家具','テーブル・椅子']},
    {'id':'0010', 'name':'子ども部屋用収納','price':35000, 'tags':['家具','収納システム', '子ども部屋家具']}
  ];
  
  //--- データの定義 ---
  const cate1 = [
    '---',                  // 未選択
  '家具',
  'ベッド・マットレス',
  '収納家具・収納グッズ',
  '子ども家具'
  ];
  
  // 小分類
  const cate2 = [
  // 未選択
  ['---'],
  // 家具のカテゴリ
  ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
  // ベッド・マットレスのカテゴリ
  ['ベッド','寝具','マットレス'],
  // 収納家具・収納グッズ'のカテゴリ
  ['家具・ラック','収納システム'],
  // 子ども家具
  ['子ども部屋家具','ベビー家具・ベビーグッズ']
  ];
  
  //--- 共通で使用する要素を取得 ---
  // 大分類のselectをid属性により取得
  let cate1Element = document.getElementById('mainMenu');
  
  // 小分類のselectをid属性により取得
  let cate2Element = document.getElementById('subMenu');
  
  // 商品リストを表示する要素を取得
  let itemListElement = document.getElementById('itemList');
  
  //--- 定義した関数 ---
  // 大分類のoptionを追加する関数
  function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = '';
  
    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate1.length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate1[i];    // optionの値に配列の値を代入
        option.text = cate1[i];     // optionの表示文字列に配列の値を代入
        cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
  }
  
  // 小分類のoptionを追加する関数
  function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = '';
  
    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[idx].length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate2[idx][i];    // optionの値に配列の値を代入
        option.text = cate2[idx][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
  }
  
  // 商品一覧をtableとして表示
  function viewItemList(tag) {
    let target = document.getElementById('itemList');
  
    // 商品一覧を削除
    target.innerHTML = '';
  
    if (tag !== undefined) {
        let html = '';
        html += '<table>';
        let count = 0;
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].tags.some(t => t === tag)) {
                if (count === 0) {
                  html += '<tr>';
                }
  
                // 商品情報
                html += '<td>';
                html += '<img src="img/item-sample.jpg" alt="' + itemList[i].name + '" width="180" height="123" />';
                html += '<p>商品名：&nbsp;' + itemList[i].name + '</p>';
                html += '<p>価格：&nbsp;&yen;' + itemList[i].price + '</p>';
                html += '<span><i class="fas fa-shopping-cart">ショッピングカート</i></span>';
                html += '</td>';
  
                if (count == 5)  {   // 商品を横に５つ並べたら次の行に変更
                    html += '</tr>';
                    count = 0;
                } else {
                    count++;
                }
            }
        }
        if (count > 0) html += '</tr>'; // 最後に閉じる
        html += '</table>'
        target.innerHTML = html;
    }
  }
  
  //--- イベントリスナーの定義 ---
  // 大分類の選択された時のイベントリスナー
  cate1Element.addEventListener('change', function(){
    // 選択されば番号を取得
    let idx = cate1Element.selectedIndex;
    // 大分類の選択に合わせて、小分類の生成
    setSubMenu(idx);
    //　小分類が選択されたときに、最初に表示される値
    viewItemList(cate2[idx][0]);
  });
  
  // 小分類の選択された時のイベントリスナー
  cate2Element.addEventListener('change', function(){
    // 選択されば値を取得
    let val = cate2Element.value;
    viewItemList(val);
  });

  //--- プログラムの実行 ---
  // 大分類の生成
  setMainMenu();