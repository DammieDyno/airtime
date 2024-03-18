let out = document.getElementById("show");
let docNum = document.getElementById("select");
let docNumb = document.getElementById("selectt");
let loadd = document.getElementById("enter");
let airtime ;
console.log(out.innerHTML);

function generate() {
    if (docNum.value == '' || docNumb. value == '' ) {
        alert("Select an Amount and a service provider 🎭🎭 ")
    } else {
        airtime = Math.floor(Math.random() *10000000000000000);
        out.innerHTML = airtime
        console.log(out.innerHTML);
    }
}

function load() {
    if (loadd.value == ''){
        alert("You haven't enter your airtime yet")
    }
    else if (loadd.value.startsWith("311") && loadd.value.includes(airtime) &&  loadd.value.endsWith( "#")) {
        alert(`Account recharge of ${docNum.value} ${docNumb.value} was successful, 1hr free on Tiktok + 1.2GB N500, Dial *406*2# to buy.`)
    } else {
        alert("Dear customer, this pin is incorrect and your line will be DISABlED from the service after 5 incorrect attempts ")
    }
    console.log(docNum.value,docNumb.value);
}