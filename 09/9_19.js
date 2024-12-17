//1から100までの配列a
let a = [];
for (let i = 1; i < 101; i++){
    a.push(i)
}
//3の倍数のみが入った配列b3を作成
let b3 = a.filter(function(e) {
    if (e % 3 === 0) {
        return true;
    } else {
        false;
    }
});
console.log(b3); 