console.log(add("1", "a"));
console.log(add("1z", "1"));

function add(str1, str2) {
  // "1" + "a" = "b";
  // "1z" + "1" = "20";
  let map = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];
  let st1 = str1.split("").reverse();
  let st2 = str2.split("").reverse();
  let sum = new Array((st1.length > st2.length ? st1.length : st2.length) + 1).fill(0);
  for(let i = 0; i < st1.length; i++){
    sum[i] = map.indexOf(st1[i]);
  }
  for(let i = 0; i < st2.length; i++){
    sum[i] +=  map.indexOf(str2[i]);
  }
  // 求和
  for(let i = 0; i < sum.length - 1; i++){
    if(sum[i] > 35){
      sum[i+1] += sum[i] / 36;
      sum[i] %= 36;
    }
  }
  // 反向添加
  let builder = "";
  for(let i = sum.length - 1; i >= 0; i--){
    builder += map[sum[i]];
  }
  // 以0开头结束
  if(builder.charAt(0)){
    builder = builder.substring(1);
  }
  return builder;
}