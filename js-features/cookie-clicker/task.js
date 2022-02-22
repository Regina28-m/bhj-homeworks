const cookie = document.getElementById("cookie")
let timeLastClick = new Date();

countAndChangeSize = () => {
    const clicker__counter = document.getElementById("clicker__counter");
    clicker__counter.textContent++; 
    if (cookie.width == 200) cookie.width = 250;
    else cookie.width = 200;
    const speedClick = document.getElementById("speedClick");
    speedClick.textContent = (1 / ((new Date() - timeLastClick) / 1000 )).toFixed(2);
    timeLastClick = new Date();
}
cookie.onclick = countAndChangeSize;