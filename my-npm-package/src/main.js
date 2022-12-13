let cookies = 0;
let addCookiePerSecond = 1;
let addCookiePerClick = 1;
let upgrade1Level = 1, upgrade2Level = 0, upgrade3Level = 0, upgrade4Level = 0, upgrade5Level = 0;
let upgrade1 = 10, upgrade2 = 100, upgrade3 = 1000, upgrade4 = 5000, upgrade5 = 100000;
let cookieAmount = document.querySelector(".cookieAmount");
let cookiePerClick = document.querySelector(".cookiePerClick");
let cookiePerSecond = document.querySelector(".cookiePerSecond");
let btn1 = document.querySelector(".Nazwa1");
let btn2 = document.querySelector(".Nazwa2");
let btn3 = document.querySelector(".Nazwa3");
let btn4 = document.querySelector(".Nazwa4");
let btn5 = document.querySelector(".Nazwa5");
let desc1 = document.querySelector(".Nazwa1Desc");
let desc2 = document.querySelector(".Nazwa2Desc");
let desc3 = document.querySelector(".Nazwa3Desc");
let desc4 = document.querySelector(".Nazwa4Desc");
let desc5 = document.querySelector(".Nazwa5Desc");
let cookieClick = document.querySelector(".cookie");
btn1.addEventListener("click", function(){   
    if(cookies >= upgrade1){
        cookies = cookies - upgrade1;
        upgrade1 = upgrade1 + (upgrade1 * 0.3);
        upgrade1 = +(Math.round(upgrade1 + "e+2") + "e-2");
        btn1.value = "Level up " + upgrade1 + " ciastek";
        upgrade1Level += 1;
        desc1.innerHTML = "+0,1 ciastka per level: " + upgrade1Level;
        cookies = +(Math.round(cookies + "e+2") + "e-2");
        cookieAmount.innerHTML = "Całkowita ilość wygenerowanych ciastek: " + cookies;
        addCookiePerClick = upgrade1Level + (0.1 * addCookiePerSecond);
        addCookiePerClick = +(Math.round(addCookiePerClick + "e+2") + "e-2");
        addCookiePerSecond = addCookiePerSecond + 0.1;
        addCookiePerSecond = +(Math.round(addCookiePerSecond + "e+2") + "e-2");
        cookiePerClick.innerHTML = "Ilość ciastek per click: " + addCookiePerClick;
        cookiePerSecond.innerHTML = "Ilość ciastek per second: " + addCookiePerSecond;
        check();
    }
})
btn2.addEventListener("click", function(){
    if(cookies >= upgrade2){
        cookies = cookies - upgrade2;
        upgrade2 = upgrade2 + (upgrade2 * 0.3);
        upgrade2 = +(Math.round(upgrade2 + "e+2") + "e-2");
        btn2.value = "Level up " + upgrade2 + " ciastek";
        upgrade2Level += 1;
        desc2.innerHTML = "+1 ciastka per level: " + upgrade2Level;
        cookies = +(Math.round(cookies + "e+2") + "e-2");
        cookieAmount.innerHTML = "Całkowita ilość wygenerowanych ciastek: " + cookies;
        addCookiePerSecond = addCookiePerSecond + 1;
        addCookiePerSecond = +(Math.round(addCookiePerSecond + "e+2") + "e-2");
        cookiePerSecond.innerHTML = "Ilość ciastek per second: " + addCookiePerSecond;
        check();
    }
})
btn3.addEventListener("click", function(){
    if(cookies >= upgrade3){
        cookies = cookies - upgrade3;
        upgrade3 = upgrade3 + (upgrade3 * 0.3);
        upgrade3 = +(Math.round(upgrade3 + "e+2") + "e-2");
        upgrade3Level += 1;
        btn3.value = "Level up " + upgrade3 + " ciastek";
        desc3.innerHTML = "+5 ciastka per level: " + upgrade3Level;
        cookies = +(Math.round(cookies + "e+2") + "e-2");
        cookieAmount.innerHTML = "Całkowita ilość wygenerowanych ciastek: " + cookies;
        addCookiePerSecond = addCookiePerSecond + 5;
        addCookiePerSecond = +(Math.round(addCookiePerSecond + "e+2") + "e-2");
        cookiePerSecond.innerHTML = "Ilość ciastek per second: " + addCookiePerSecond;
        check();
    }
})
btn4.addEventListener("click", function(){
    if(cookies >= upgrade4){
        cookies = cookies - upgrade4;
        upgrade4 = upgrade4 + (upgrade4 * 0.3);
        upgrade4 = +(Math.round(upgrade4 + "e+2") + "e-2");
        upgrade4Level += 1;
        btn4.value = "Level up " + upgrade4 + " ciastek";
        desc4.innerHTML = "+10 ciastka per level: " + upgrade4Level;
        cookies = +(Math.round(cookies + "e+2") + "e-2");
        cookieAmount.innerHTML = "Całkowita ilość wygenerowanych ciastek: " + cookies;
        addCookiePerSecond = addCookiePerSecond + 10;
        addCookiePerSecond = +(Math.round(addCookiePerSecond + "e+2") + "e-2");
        cookiePerSecond.innerHTML = "Ilość ciastek per second: " + addCookiePerSecond;
        check();
    }
})
btn5.addEventListener("click", function(){
    if(cookies >= upgrade5){
        cookies = cookies - upgrade5;
        upgrade5 = upgrade5 + (upgrade5 * 0.3);
        upgrade5 = +(Math.round(upgrade5 + "e+2") + "e-2");
        upgrade5Level += 1;
        btn5.value = "Level up " + upgrade5 + " ciastek";
        desc5.innerHTML = "+100 ciastka per level: " + upgrade5Level;
        cookies = +(Math.round(cookies + "e+2") + "e-2");
        cookieAmount.innerHTML = "Całkowita ilość wygenerowanych ciastek: " + cookies;
        addCookiePerSecond = addCookiePerSecond + 100;
        addCookiePerSecond = +(Math.round(addCookiePerSecond + "e+2") + "e-2");
        cookiePerSecond.innerHTML = "Ilość ciastek per second: " + addCookiePerSecond;
        check();
    }
})
cookieClick.addEventListener("click", function(){
    cookies = cookies + addCookiePerClick;
    cookies = +(Math.round(cookies + "e+2") + "e-2");
    cookieAmount.innerHTML = "Całkowita i lość wygenerowanych ciastek: " + cookies;
})

function addCookie(){
    cookies = cookies + addCookiePerSecond;   
    cookies = +(Math.round(cookies + "e+2") + "e-2");
    cookieAmount.innerHTML = "Całkowita i lość wygenerowanych ciastek: " + cookies;
    check();
}
setInterval(addCookie, 1000);
function check(){
    if(cookies >= upgrade1){
        btn1.style.color = "red";
    }
    else{
        btn1.style.color = "black";
    }
    if(cookies >= upgrade2){
        btn2.style.color = "red";
    }
    else{
        btn2.style.color = "black";
    }
    if(cookies >= upgrade3){
        btn3.style.color = "red";
    }
    else{
        btn3.style.color = "black";
    }
    if(cookies >= upgrade4){
        btn4.style.color = "red";
    }
    else{
        btn4.style.color = "black";
    }
    if(cookies >= upgrade5){
        btn5.style.color = "red";
    }
    else{
        btn5.style.color = "black";
    }
}
