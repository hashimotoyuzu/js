function clickButton() {
    // ① inputタグの要素を取得
    let target = document.getElementById('btn01');
    // ② inputタグの親（一つ上）のタグを取得
    let parent = target.parentNode;
    // ② 新たにメッセージ表示のための要素としてspanタグを作成する
    let newSpan = document.createElement('span');
    // ③ 新たにメッセージ表示のテキストを作成
    let newText = document.createTextNode('ボタンが押されました');
    // ④ テキストノードをspanタグの下に追加
    newSpan.append(newText);
    // ⑤ inputタグのあとに、新たなspanタグの要素を追加する
    parent.insertBefore(newSpan, target.netSibling);                
}