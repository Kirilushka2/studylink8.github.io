function displayMessage(type, title, message, time){
    let div = document.createElement('div');
    div.classList.add('message-box');

    let content = document.createElement('div');
    content.classList.add('massage-content');
    content.classList.add(type);

    let header = document.createElement('div');
    header.classList.add('massage-header');
     header.innerText = title;

    let text = document.createElement('div');
    text.classList.add('massage-text');
     text.innerText = message;

    let line = document.createElement('div');
    line.classList.add('massage-time-line');

    content.appendChild(header);
    content.appendChild(text);
    content.appendChild(line);

    div.appendChild(content);

    document.body.appendChild(div);

    line.style.width = '100%'
    let krok =1000/time;

    let lineMove = setInterval(function(){
        line.style.width = `${Number(line.style.width.replace('%','')) - krok}%`
        if(Number(line.style.width.replace('%','')) < 1){        
        clearInterval(lineMove)
        document.body.removeChild(div);
        }
    }, 10);
}
displayMessage('massage-error', 'Помилка','немає грошей',1000)