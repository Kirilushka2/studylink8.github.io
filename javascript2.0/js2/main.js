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
let spiner = document.getElementById('spiner');
let list = document.getElementById('list');
let statti = [];

db.collection('articles').get().then(function(res){
    res.forEach(function(title){
            statti.push(title.data())
            spiner.innerHTML = '';
            drawArticle(title.data())
    })

})
console.log(statti)

function drawArticle(data){
    let article = document.createElement('article');

    let title = document.createElement('h2');
    let text = document.createElement('div');
    let avtor = document.createElement('a');

    title.innerHTML = data.title;
    text.innerHTML = data.article;

    avtor.innerHTML = 'Original'
    avtor.href = data.author

    article.appendChild(title)
    article.appendChild(text)
    article.appendChild(avtor)

    list.appendChild(article)
}