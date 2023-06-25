db.collection('articles').get().then(res =>{
    res.forEach(doc => {
        let object = doc.data();
        object.id = doc.id;

        drawArticle(object)
    })
})



function drawArticle(stat){
    let div = document.createElement('div')
    div.classList.add('article')
    let h2 = document.createElement('h2')
    h2.innerText = stat.title
   
    let h3 = document.createElement('h3')
    h3.innerText = stat.id

    h3.addEventListener('click', function(){
        window.location.href = `article.html?id=${stat.id}`
    })

    div.appendChild(h2)
    div.appendChild(h3)

    document.getElementById('articles').appendChild(div)

}