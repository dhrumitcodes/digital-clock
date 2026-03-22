let hourhand = document.querySelector(".hour-hand");
let minutehand = document.querySelector(".min-hand");
let secondhand = document.querySelector(".sec-hand");

let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hrotation = 30 * h + 0.5 * m;
    let mrotation = 6 * m;
    let srotation = 6 * s;

    hourhand.style.transform = `translateX(-50%) rotate(${hrotation}deg)`;
    minutehand.style.transform = `translateX(-50%) rotate(${mrotation}deg)`;
    secondhand.style.transform = `translateX(-50%) rotate(${srotation}deg)`;

    dh.innerText = String(h).padStart(2, '0');
    dm.innerText = String(m).padStart(2, '0');
    ds.innerText = String(s).padStart(2, '0');

}, 1000);