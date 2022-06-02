const btns = {
    over: document.getElementById('o18'),
    not: document.getElementById('n18')
};

const elements = {
    over: document.getElementsByClassName('overlay')[0],
    content: document.getElementsByClassName('content')[0],
    background: document.getElementsByClassName('background')[0]
};

btns.over.addEventListener('click', () => {
    elements.over.style.display = 'none';
    elements.background.style.display = 'none';
    elements.content.innerHTML = `
    <style>
    body {
        background-color: #1d1d1d;
    }
    
    .nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 50px;
        background-color: #101010;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
    }
    
    .c {
        display: flex;
        flex-direction: row;
    }
    
    .c input {
        outline: none;
        background: #161616;
        border: 2px solid #979797;
        height: 30px;
        width: 200px;
        color: white;
    }
    
    .c button {
        outline: none;
        background: #161616;
        border: 2px solid #979797;
        border-left: none;
        color: white;
    }
    
    .body {
        margin-top: 100px;
    }
    
    .body .video {
        user-select: none;
        cursor: pointer;
        height: 240px;
        width: 320px;
        border-radius: 5px;
        background-color: #3e3e3e;
        color: white;
        position: relative;
        overflow: hidden;
    }
    
    .body .video img {
        width: 100%;
    }
    
    .body .video .des {
        position: absolute;
        bottom: 15px;
        display: flex;
        margin: 5px;
    }
</style>
<div class="nav">
    <div class="l"></div>
    <div class="c"><input disabled type="text"><button>Search</button></div>
    <div class="r"></div>
</div>
<div class="body">
    <div class="video" onclick="top.location.href = '20220603000118123aa1814arqr.html'">
        <img src="data:image/WEBP;base64,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"
            alt="">
        <div class="des">18岁处女生日破处</div>
    </div>
</div>
    `;
});

btns.not.addEventListener('click', () => {
    var count = 3;
    btns.not.innerText = count + "秒后自动返回";
    count--;
    const loop = setInterval(() => {
        btns.not.innerText = count + "秒后自动返回";
        count--;
    }, 1000);
    setTimeout(() => {
        window.history.back();
        clearInterval(loop);
    }, 3000);

});