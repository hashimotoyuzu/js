let main_category = ['WOMAN','MEN','KIDS','BABY'];


// コールバック関数で書いた場合
main_category.forEach(function(e, index, array){
  console.log(e + ' = ' + array[index]);
});

// アロー関数で書いた場合
main_category.forEach((e, index, array)=>{
  console.log(e + ' = ' + array[index]);
});