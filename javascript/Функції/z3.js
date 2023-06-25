let user = {
    name:"Anonimys",
    lastname:"Шванов",
    age:14,
    email:"Anonimys228",
    city:"Saratow"
}

 let body = document.getElementById("body");

 function showUser(){
    body.innerHTML = `
    <tr>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.city}</td>
    </tr>`;   
 }
function changeNama(x){
    user.name = x;
    showUser()
};
function changeCity(x){
    user.city = x;
    showUser()
};
function changeAge(x){
    user.age = x;
    showUser()
};
function changeEmeil(x){
    user.email = x;
    showUser()
};