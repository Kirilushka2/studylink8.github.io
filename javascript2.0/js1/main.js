const firebaseConfig = {
    apiKey: "AIzaSyAg092MTXPL0KZGx1xuO992t7HUSObkIx8",
    authDomain: "blek-mark.firebaseapp.com",
    projectId: "blek-mark",
    storageBucket: "blek-mark.appspot.com",
    messagingSenderId: "936616943791",
    appId: "1:936616943791:web:91b304ed61ff86c88bb45a"
  };

  firebase.initializeApp(firebaseConfig);

 var db = firebase.firestore();
let massive = []
db.collection('Users').get().then(function(res){
    res.forEach(function(doc){
        
        massive.push(doc.data())
    });
})
console.log(massive)

function drawUsers(){
    let tbody = document.getElementById('tbody');
    let users_tbody = '';
massive.map(function(user){
    users_tbody +=`
    <tr>
            <td>${user.name}</td>
            <td>ввіф</td>
            <td>всма</td>
            <td>купу</td>
        </tr>`
})

    tbody.innerHTML = users_tbody;
}