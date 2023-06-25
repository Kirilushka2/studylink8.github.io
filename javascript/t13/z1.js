let klawa2 = {
    neme:"Клавіатура дротова Logitech G209 Prodigy USB",
    otziv:24,
    price:3500,
    akci:true,
    img: "z1-4.jpg"
} 
let klawa1 = {
    neme:"",
    otziv:204,
    price:4000,
    akci:true,
    img: "z1-2.jpg"
} 
let card =document.getElementById(`products`);
let info=`<div class="card"id="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="z1-2.jpg" alt="">
</div>

<div class="card_info">
    <div class="name">
    ${klawa2.neme}
        
    </div>
    
    <div class="reviews">
        ${klawa2.otziv} відгуки
    </div>
    
    <div class="price">
        ${klawa1.price}&#8372;
    </div>
</div>
</div>`;
info +=`
<div class="card"id="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="z1-2.jpg" alt="">
</div>

<div class="card_info">
    <div class="name">
    ${klawa1.neme}
        
    </div>
    
    <div class="reviews">
        ${klawa1.otziv} відгуки
    </div>
    
    <div class="price">
        ${klawa1.price}&#8372;
    </div>
</div>
</div>
`;
card.innerHTML = info;
let bal1 = 0;
let bal2 = 0;
if (klawa1.price < klawa2.price){
    bal1=klawa2.price - klawa1.price;
}else{
    bal2 = klawa1.price - klawa2.price;
}
bal1 = bal1 + klawa1.otziv*0.5;
bal2 = bal2 + klawa2.otziv*0.5;
    



