let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.outerHTML = '<input type="text" value="p1">';  //　タグ名を変更
e2.innerHTML = 'テキスト文字列'; //テキスト文字列を埋め込む 
//e2.style.color = 'red'; 
e2.classList.add('red');      
e3.id = 'p5';               //　id属性の値を変更

