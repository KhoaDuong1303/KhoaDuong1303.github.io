function welcomeCustomer() {
    alert("Welcome to Sakura Flower Shop! We offer the finest flowers to bring joy to your life!");
    console.log("Welcome message displayed");
}
function showMessage() {
    let age = 15;
    let name = "Katalina";

    if (age >= 18) {
        alert("Hello " + name + "! You’re welcome to buy any bouquet you like at Sakura Flower Shop!");
    } else {
        alert("Hi " + name + "! You're a bit too young to shop alone.");
        let years = 18 - age;
        alert("Please come back in " + years + " year(s) or visit us with a grown-up!");
        
        let sum = 0;
        for (let i = 1; i <= 100; i++) {
            sum += i;
        }
        alert("Fun fact while you're here: the sum from 1 to 100 is " + sum + "!");
    }
}
function changeColor() {
    console.log("Button clicked or mouse entered!");
    document.getElementById("main").style.backgroundColor = "grey";
    document.getElementById("justDiv").style.backgroundColor = "while";
}

function resetColor() {
    console.log("Mouse left the div");
    document.getElementById("main").style.backgroundColor = "pink";
    document.getElementById("justDiv").style.backgroundColor = "while";
}
function showFlowerImage() {
    let img = document.getElementById("flowerImage");
    let btn = document.getElementById("changeButton");

    img.src = "https://i.pinimg.com/736x/05/c1/09/05c109f34ad8140baa52ae83c53d7f08.jpg"; 
    img.style.display = "block"; 
    btn.style.display = "inline"; 
}

function changeFlowerImage() {
    let img = document.getElementById("flowerImage");

    if (img.src.includes("https://i.pinimg.com/736x/05/c1/09/05c109f34ad8140baa52ae83c53d7f08.jpg")) 
        {
        img.src = "https://i.pinimg.com/736x/9a/a8/44/9aa8443e2c6ae70c79ebd8061d835ee0.jpg";
    } 
    else {
        img.src = "https://i.pinimg.com/736x/05/c1/09/05c109f34ad8140baa52ae83c53d7f08.jpg";
    }
}
function showShopMessage() {
    document.getElementById("shopMessage").innerText = "Flowers bring smiles, love, and joy. Welcome to Sakura!";
}
let clickCount = 0;

function countClicks() {
    clickCount++;
    let message = "";

    if (clickCount <= 20) {
        message = "You have clicked " + clickCount + " time" + (clickCount > 1 ? "s." : ".");
    } else {
        message = "You’ve clicked more than 20 times. Take a flower break!";
    }

    document.getElementById("clickCounterText").innerText = message;
}
let dontCloseClickCount = 0;

function showMany(){
    for (let i = 1; i <= 10; i++) {
        alert("Don't close me! You clicked me " + i + " time" + (i > 1 ? "s." : "."));
    }
}