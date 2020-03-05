module.exports = function check(str, bracketsConfig) {
  
  
  let br =[];
  for (i = 0; i<bracketsConfig.length;i++){
    for ( j = 0; j<bracketsConfig[i].length;j++){
        if (bracketsConfig[i][j] != "|") br.push(bracketsConfig[i][j]);
      //br.push(bracketsConfig[i][j]);
    }
}
// for (i=0; i<br.length;i++){
//         if (br[i]=="|") br=br.splice(i, 2);
// }
  
   br = br.join('');
  // стек открытых скобок
  var st = [];
 
  let qI = 0;
  // бежим по всей строке
  for (var i = 0; i < str.length; ++i) {
      if (str[i]==" | ") qI+=1;
      if (qI%2!=0) st.push("|")
      // текущий символ
      var ch = str[i];
      // ищем символ в скобках
      var ind = br.indexOf(ch);
      // если скобка найдена
      if (ind >= 0) {
          // проверяем, какая это скобка
          if (ind & 1) {
              // если закрывающая скобка, проверяем стек
              // стек пуст - плохо
              if (!st.length) return false;
              // извлекаем последнюю открытую скобку из стека
              var last_br = st.pop();
              // если она не соответствует закрывающей скобке - тоже плохо
              if (last_br != br[ind - 1]) return false;
          } else { 
              // открывающую скобку просто пихаем в стек
              st.push(ch);
          }
      }
  }
  // если после обхода всей строки стек пуст - всё ок
  return !st.length;

}


function isBalanced(str) {
  // пары открывающих-закрывающих скобок
  var br = "||";
  // стек открытых скобок
  var st = [];
  // бежим по всей строке
  for (var i = 0; i < str.length; ++i) {
      // текущий символ
      var ch = str[i];
      // ищем символ в скобках
      var ind = br.indexOf(ch);
      // если скобка найдена
      if (ind >= 0) {
          // проверяем, какая это скобка
          if (ind & 1) {
              // если закрывающая скобка, проверяем стек
              // стек пуст - плохо
              if (!st.length) return false;
              // извлекаем последнюю открытую скобку из стека
              var last_br = st.pop();
              // если она не соответствует закрывающей скобке - тоже плохо
              if (last_br != br[ind - 1]) return false;
          } else { 
              // открывающую скобку просто пихаем в стек
              st.push(ch);
          }
      }
  }
  // если после обхода всей строки стек пуст - всё ок
  return !st.length;
}

console.log(isBalanced('||'));

const config2 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
let br =[];
for (i = 0; i<config2.length;i++){
    for ( j = 0; j<config2[i].length;j++){
        if (config2[i][j] != "|") br.push(config2[i][j]);
    }

}
// for (i=0; i<br.length;i++){
//     if (br[i]=="|") br=br.splice(i, 2);
// }
console.log(br.join(''));