let sum = 0;
let kilkist=0;
let lol = true;
while(lol == true){
sum = sum + Number (prompt(`Введіть ціну товару`));
kilkist++
lol = confirm(`Чи хочете ви іше придбати?`)}
console.log(`ви придбали ${kilkist} товарів на загальну вартість - ${sum} грн`)

