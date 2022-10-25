let btn = document.querySelector('.btn');


btn.addEventListener('click', ()=>{
    let URL = 'https://api.quotable.io/random';
    fetch(URL).then((res) => res.json()).then((data) => {
        console.log(data);
        document.querySelector('.quote').innerText =data.content;
        document.querySelector('.author').innerText = data.author;        ;
    })

    
});




