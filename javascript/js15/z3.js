let user = {
    name:`petro` ,
    lastname:'petrovich' ,
    age:'8' ,
    email:'petya8@gmail.com' ,
    misto:'Khemelnickiy'
}
function showUser() {
    document.getElementById(`table`).innerHTML = `<table>
    <tr>
       <th>Імя</th>
       <th>Прізвище</th>
       <th>Вік</th>
       <th>Емейл</th>
       <th>Місто</th>
   </tr>
   <tr>
       <td>${user.name}</td>
       <td>${user.lastname}</td>
       <td>${user.age}</td>
       <td>${user.email}</td>
       <td>${user.misto}</td>
   </tr>
   </table>`
}



/*function changerName(x){
    user.name =x;
    showUser();
}
function changerlastname(x){
    user.lastname =x;
    showUser();
}
function changerage(){
    user.age =x;
    showUser();
}
function changeremail(x){
    user.email =x;
    showUser();
}
function changermisto(x){
    user.misto =x;
    showUser();
}*/
function changerUserdata(x,y,w,h,j){
    user.name = x;
    user.lastname = y;
    user.age =w;
    user.email =h;
    user.misto =j;
    showUser();
}
function deluser(){
    document.getElementById(`table`).innerHTML = ``;
}