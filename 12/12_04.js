function clickButton(target) {
    let parent = target.parentNode;
    let span = document.getElementById('msg');
    if (span == null) {
        var newSpan = document.createElement('span');
        newSpan.setAttribute('id', 'msg');
        var newText = document.createTextNode('ボタンが押されました');
        newSpan.append(newText);
        parent.insertBefore(newSpan, target.netSibling);                
    }
}