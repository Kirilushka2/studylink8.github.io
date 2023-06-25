document.getElementById(`month`);

let month = prompt(`який місяць`);
<BR></BR>
let day =``;
for(i=1;i<32;i++){

    if(i% 7 == 0 || (i+1) % 7 == 0){
        day+=`<div class="day vihidni">${i} січня</div>`;

}else{
    day+=`<div class="day">${i} ЛИСТОПАД</div>`;
}


}

month.innerHTML = day;
