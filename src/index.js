module.exports = function check(str, bracketsConfig) {
                    // первый вариант
    // let str = '|()|(||)||';
    // const config2 = [['(', ')'], ['|', '|']];
    let br =[];
    let pairSc='';
    for (i = 0; i< bracketsConfig.length;i++){
            pairSc = bracketsConfig[i][0]+bracketsConfig[i][1];
            br.push(pairSc);
            pairSc = "" ;
    }
    let count = 0; 
    do{
        count = 0;
        for (let i = 0;i<br.length;i++){
            
                if (str.indexOf(br[i])!= -1){
                str = str.replace( br[i], '');
                count+=1;
                } 
        }
    } while (count != 0);
    return (str.length == 0) ? true : false;


                    // второй вариант
    //   let br =[];
//   for (i = 0; i<bracketsConfig.length;i++){
//     for ( j = 0; j<bracketsConfig[i].length;j++){
//         if (bracketsConfig[i][j] != "|") br.push(bracketsConfig[i][j]);
//       //br.push(bracketsConfig[i][j]);
//     }
// }
// // for (i=0; i<br.length;i++){
// //         if (br[i]=="|") br=br.splice(i, 2);
// // }
  
//    br = br.join('');
//   // стек открытых скобок
//   var st = [];
 
//   let qI = 0;
//   // бежим по всей строке
//   for (var i = 0; i < str.length; ++i) {
//       if (str[i]==" | ") qI+=1;
//       if (qI%2!=0) st.push("|")
//       // текущий символ
//       var ch = str[i];
//       // ищем символ в скобках
//       var ind = br.indexOf(ch);
//       // если скобка найдена
//       if (ind >= 0) {
//           // проверяем, какая это скобка
//           if (ind & 1) {
//               // если закрывающая скобка, проверяем стек
//               // стек пуст - плохо
//               if (!st.length) return false;
//               // извлекаем последнюю открытую скобку из стека
//               var last_br = st.pop();
//               // если она не соответствует закрывающей скобке - тоже плохо
//               if (last_br != br[ind - 1]) return false;
//           } else { 
//               // открывающую скобку просто пихаем в стек
//               st.push(ch);
//           }
//       }
//   }
//   // если после обхода всей строки стек пуст - всё ок
//   return !st.length;

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

let str = '([{}])';
const config2 = [['(', ')'], ['[', ']'], ['{', '}']];
let br =[];
let pairSc='';
for (i = 0; i<config2.length;i++){
        pairSc = config2[i][0]+config2[i][1];
        br.push(pairSc);
        pairSc ="";
}
console.log (br);
console.log(str);
let count = 0; 

do{
    count = 0;
    for (let i = 0;i < br.length;i++){
            
            if (str.indexOf(br[i]) != -1 ){
            str = str.replace( br[i], '');
            
            count+=1;
            console.log(count + " счетчик."+ str + "строка после парсинга."+ br[i]+" поисковый элемент.");
            } ;
    }

} while (count != 0);
console.log(count);
console.log(str + " итог");
console.log(str.length + " длина");


// for (i=0; i<br.length;i++){
//     if (br[i]=="|") br=br.splice(i, 2);
// }
console.log(br.join(''));