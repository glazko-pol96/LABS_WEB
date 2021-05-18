import o3 from './node_modules/goss_proto/index'

let prot = o3['o3'];
let arr = [];

do {
    arr.push(prot.name);
 }
 while (prot = Object.getPrototypeOf(prot))

console.log(arr);