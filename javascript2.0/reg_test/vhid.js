function googleAuth(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    

    
    var user = result.user;
    console.log(user)
    createUserDb(user.uid,user.displayName,'Сігман',user.email,'251462452')

  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
   
    var email = error.email;
  
  });
}
function logOut(){firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}




function createUserDb(id,name,lastname,email,phone){
    let newUser = {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        isAdmin: false
    }
    db.collection('first_reg').doc(id).set(newUser).then(res =>{
        console.log('успішно зареєсезовано')
    })
}  