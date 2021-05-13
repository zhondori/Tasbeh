let duo = document.querySelector(".duo");
let button = document.querySelector(".btn1");
let button1 = document.querySelector(".btn");
let darkLight= document.querySelector(".button");
let span = document.querySelector("span");
let myDate = document.querySelector(".data");
let Box = document.querySelector(".box");
let body = document.querySelector("body");
let count = 0;
let all = 0;
button.onclick = function () {
    count += 1;
    myDate.innerHTML = count;
    if (count === 33) {
        duo.textContent = "Alhamdulillah";
    } else if (count === 66) {
        duo.textContent = "Allohu Akbar";
    } else if (count === 99) {
        count = 0;
        duo.textContent = "Subhanalloh";
        all += 1;
        span.textContent = all;
        myDate.innerHTML = count;

    }
}
button1.onclick = function () {
    count = 0;
    span.textContent = null;
    myDate.innerHTML = count;
    if (count === 0) {
        duo.textContent = "Subhanalloh";
    }
}
darkLight.onclick = function() {
    Box.classList.toggle("dark");
    body.classList.toggle("Bdark");
}