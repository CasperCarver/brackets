module.exports = function check(str, bracketsConfig) {
  
  
  let br =[];
  for (i = 0; i<bracketsConfig.length;i++){
    for ( j = 0; j<bracketsConfig[i].length;j++){
      br.push(bracketsConfig[i][j]);
    }
}

  
   br = br.join('');
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

const config2 = [['(', ')'], ['[', ']']];
let br =[];
for (i = 0; i<config2.length;i++){
    for ( j = 0; j<config2[i].length;j++){
      br.push(config2[i][j]);
    }

}
console.log(br.join(''));