
//开始游戏，弹出用户输入框
let start = document.querySelector("#startGame>img");

let hammerStart = new Hammer(start);
hammerStart.on("tap", function(){
    userMsg.style.display = "block";
});

//关闭用户信息框
let shutDown = document.querySelector("#userMsg>img");

let hammerShutDown = new Hammer(shutDown);
hammerShutDown.on("tap", function(){
    userMsg.style.display = "none";
});

// 游戏界面

// 文字切换
let txts = ["imgs/txt1.png", "imgs/txt2.png", "imgs/txt3.png"];

let k = 1;

let timer = setInterval(changeImg, 2000);

function changeImg(){
    txtChange.src = txts[k];
    k++;
    if (k == 3){
        k = 0;
    }
}

// part1和part2切换
let button = document.querySelector("input[type='button']");
let hammerChange = new Hammer(button);
hammerChange.on("tap", function(){
    part1.style.display = "none";
    part2.style.display = "block";
    doNow();
});

// 数钱开始
let counts = document.querySelectorAll(".times");
let lessTime = document.querySelector(".clock");
let m = 1, n = 1, q = 0, t = 60, countDown;
let hammerMoney = new Hammer(money);
hammerMoney.get("pan").set({direction: Hammer.DIRECTION_ALL});
let flag = true;
hammerMoney.on("panup", function(){
    if (!flag)  return;
    let newImg = document.createElement("img");
    newImg.src = "imgs/money.jpg";
    newImg.className = "flyMoney";
    newImg.addEventListener("animationend", function(){
        moneyWrap.removeChild(newImg);
    });
    moneyWrap.appendChild(newImg);
    flag = false;

    // 计数器
    counts[2].innerHTML = m;
    if (m == 10){
        m = 0;
        counts[2].innerHTML = m;
        counts[1].innerHTML = n;

        if (n == 10){
            n = 0;
            q++;
            counts[1].innerHTML = n;
            counts[0].innerHTML = q;
        }
        n++;
    }
    m++;
});
hammerMoney.on("panend", function(){
    flag = true;
});


    // 计时器
function doNow(){
    countDown = setInterval(function(){
        lessTime.innerHTML = t;
        if (t<=0){
            clearInterval(countDown);
            gameOver.style.display = "block";
        }
        t--;
    }, 1000);
}








