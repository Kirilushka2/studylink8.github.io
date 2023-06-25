let massive = [3,5,2,9,6,7,22,];

let max = massive[0];
let min = massive[0];
for(i=0; i< massive.length;i++){
if(max < massive[i]){
    max = massive[i];
}
    if(min > massive[i]){
        min = massive[i];
}
}
console.log(massive);
console.log(max);
console.log(min);