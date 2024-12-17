//1から100までの配列a
let a = [];
for (let i = 1; i < 101; i++){
    a.push(i)
}
//5の倍数のみが入った配列b5を作成
let b5 = a.filter(function(e) {
    if (e % 5 === 0) {
        return true;
    } else {
        false;
    }
});
console.log(b5); 