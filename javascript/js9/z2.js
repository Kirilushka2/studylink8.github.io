let lol = [1,1,1,1,2,2,3,3];
let mas = [];
for(i=0; i< lol.length;i++)
if(mas.indexOf(lol[i])== -1) {
     mas.push(lol[i]);
}

console.log(lol);
console.log(mas)