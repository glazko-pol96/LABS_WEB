import o3 from 'goss_proto'

let prot = o3;
let arrProt = [];

do {
  arrProt.push(prot.name);
}
while (prot = Object.getPrototypeOf(prot));

console.log(arrProt);
