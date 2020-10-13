//对象下所有key由驼峰/Pascal转成下划线分割
console.log(toSnakeCase({
  UserName: 'toutiao',
  Group: {
    GroupName: 'douyin'
  }
}));
/*=> {
  user_name: 'toutiao',
      group: {
    group_name: 'douyin'
  }
};*/
function toSnakeCase(obj) {
  let newObj = {};
  for(let key in obj){
    // 驼峰转化下划线
    var s = key.replace(/([A-Z])/g,"_$1").toLowerCase();
    if(s.slice(0,1) === "_") {
      s = s.slice(1);
    }
    if(typeof obj[key] !== "object") {
      newObj[s] = obj[key];
    } else {
      newObj[s] = toSnakeCase(obj[key]);
    }
  }
  return newObj;
}