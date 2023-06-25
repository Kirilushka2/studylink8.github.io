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
function add_user(){
    let new_user = {
        name: document.getElementById('user_name').value,
        lastname: document.getElementById('user_lastname').value,
        email: document.getElementById('user_email').value,
        password: document.getElementById('user_password').value
    }
    db.collection('usersNew').add(new_user).then(function(){
        console.log('yspix')
    })
}